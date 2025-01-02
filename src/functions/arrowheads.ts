import type L from "leaflet";
import "leaflet-arrowheads";
import type { PropType } from "vue";

import { propsToLeafletOptions } from "@src/utils";

import { pathProps, setupPath } from "./path";

export const arrowheadsProps = {
  ...pathProps,
  smoothFactor: {
    type: Number,
  },
  noClip: {
    type: Boolean,
    default: undefined,
  },
  latLngs: {
    type: Array as PropType<L.LatLngExpression[]>,
    required: true,
    custom: true,
  },
  arrowheadsOptions: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
} as const;

export const setupArrowheads = (props, leafletRef, context) => {
  const { options: pathOptions, methods: pathMethods } = setupPath(
    props,
    leafletRef,
    context
  );

  const options = propsToLeafletOptions<L.PolylineOptions>(
    props,
    arrowheadsProps,
    pathOptions
  );

  const methods = {
    ...pathMethods,
    setSmoothFactor(smoothFactor) {
      leafletRef.value.setStyle({ smoothFactor });
    },
    setNoClip(noClip) {
      leafletRef.value.setStyle({ noClip });
    },
    addLatLng(latLng) {
      leafletRef.value.addLatLng(latLng);
    },
    setArrowheadsOptions(options) {
      leafletRef.value.arrowheads(options);
    },
  };

  return { options, methods };
};
