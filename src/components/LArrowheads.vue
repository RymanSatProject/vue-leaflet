<script lang="ts">
import type L from "leaflet";
import "leaflet-arrowheads";
import {
  defineComponent,
  inject,
  markRaw,
  nextTick,
  onMounted,
  ref,
} from "vue";

import { arrowheadsProps, setupArrowheads } from "@src/functions/arrowheads";
import { render } from "@src/functions/layer";
import {
  AddLayerInjection,
  UseGlobalLeafletInjection,
} from "@src/types/injectionKeys";
import {
  WINDOW_OR_GLOBAL,
  assertInject,
  propsBinder,
  remapEvents,
} from "@src/utils.js";

/**
 * Arrowheads component, used to add arrowheads to a polyline
 */
export default defineComponent({
  name: "LArrowheads",
  props: arrowheadsProps,
  setup(props, context) {
    const leafletObject = ref<L.Polyline>();
    const ready = ref(false);

    const useGlobalLeaflet = inject(UseGlobalLeafletInjection);
    const addLayer = assertInject(AddLayerInjection);

    const { options, methods } = setupArrowheads(props, leafletObject, context);

    onMounted(async () => {
      const { polyline }: typeof L = useGlobalLeaflet
        ? WINDOW_OR_GLOBAL.L
        : await import("leaflet/dist/leaflet-src.esm");

      // Import the arrowheads library
      await import("leaflet-arrowheads");

      leafletObject.value = markRaw<L.Polyline>(
        polyline(props.latLngs, options)
      );

      const { listeners } = remapEvents(context.attrs);
      leafletObject.value.on(listeners);

      propsBinder(methods, leafletObject.value, props);

      addLayer({
        ...props,
        ...methods,
        leafletObject: leafletObject.value,
      });

      ready.value = true;
      nextTick(() => context.emit("ready", leafletObject.value));
    });
    return { ready, leafletObject, setArrowheads: methods.setArrowheads };
  },
  render() {
    return render(this.ready, this.$slots);
  },
});
</script>
