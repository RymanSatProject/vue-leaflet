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
    type: Object as PropType<ArrowheadOptions>,
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

interface SingleArrowheadOptions {
  /**
   * The angle of opening of the arrowheads in degrees.  Defaults to 60.
   */
  yawn?: number;
  /**
   * The size of the arrowheads, give as a string specifying pixels, %, or meters.
   * Defaults to '15%'
   */
  size?: `${number}px` | `${number}%` | `${number}m`;
}

export interface ArrowheadOptions
  extends L.PolylineOptions,
    SingleArrowheadOptions {
  /**
   * The number and spacing of arrowheads to draw along the polyline.
   * Defaults to 'allvertices'
   */
  frequency?: number | `${number}px` | `${number}m` | "allvertices" | "endonly";
  /**
   * If the size of the arrowheads, when given in percent, should be a percentage proportional
   * to the total length of the polyline, rather than the average of all the segments.
   * Defaults to false
   */
  proportionalToTotal?: boolean;
  /**
   * The offsets from start of end of where to begin/end drawing arrowheads.
   * Deafult to undefined (no offets)
   */
  offsets?: {
    start?: `${number}px` | `${number}m`;
    end?: `${number}px` | `${number}m`;
  };
  /**
   * Callback function to customize arrowheads on a 1-by-1 basis
   * Defaults to undefined
   */
  perArrowheadOptions?: (
    i: number
  ) => L.PolylineOptions & SingleArrowheadOptions;
}

declare module "leaflet" {
  export interface Polyline {
    /**
     * Adds arrowheads to an L.polyline.  See documentation at https://github.com/slutske22/leaflet-arrowheads
     * @param {object} options The options for the arrowhead.  See documentation for details
     * @returns The L.polyline instance that they arrowheads are attached to
     */
    arrowheads: (options: ArrowheadOptions) => L.Polyline;
  }
}
