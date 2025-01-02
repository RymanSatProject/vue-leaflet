import type L from "leaflet";
import type { PropType } from "vue";
export declare const arrowheadsProps: {
    readonly smoothFactor: {
        readonly type: NumberConstructor;
    };
    readonly noClip: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly latLngs: {
        readonly type: PropType<L.LatLngExpression[]>;
        readonly required: true;
        readonly custom: true;
    };
    readonly arrowheadsOptions: {
        readonly type: PropType<ArrowheadOptions>;
        readonly default: () => {};
    };
    readonly stroke: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly color: {
        readonly type: StringConstructor;
    };
    readonly weight: {
        readonly type: NumberConstructor;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
    };
    readonly lineCap: {
        readonly type: StringConstructor;
    };
    readonly lineJoin: {
        readonly type: StringConstructor;
    };
    readonly dashArray: {
        readonly type: StringConstructor;
    };
    readonly dashOffset: {
        readonly type: StringConstructor;
    };
    readonly fill: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly fillColor: {
        readonly type: StringConstructor;
    };
    readonly fillOpacity: {
        readonly type: NumberConstructor;
    };
    readonly fillRule: {
        readonly type: StringConstructor;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly interactive: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bubblingMouseEvents: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly pane: {
        readonly type: StringConstructor;
    };
    readonly attribution: {
        readonly type: StringConstructor;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly custom: true;
    };
    readonly layerType: {
        readonly type: PropType<import("../types/enums/LayerType").LayerType>;
        readonly custom: true;
    };
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly custom: true;
        readonly default: true;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
        readonly custom: true;
    };
};
export declare const setupArrowheads: (props: any, leafletRef: any, context: any) => {
    options: L.PolylineOptions;
    methods: {
        setSmoothFactor(smoothFactor: any): void;
        setNoClip(noClip: any): void;
        addLatLng(latLng: any): void;
        setArrowheadsOptions(options: any): void;
        setStroke(stroke: any): void;
        setColor(color: any): void;
        setWeight(weight: any): void;
        setOpacity(opacity: any): void;
        setLineCap(lineCap: any): void;
        setLineJoin(lineJoin: any): void;
        setDashArray(dashArray: any): void;
        setDashOffset(dashOffset: any): void;
        setFill(fill: any): void;
        setFillColor(fillColor: any): void;
        setFillOpacity(fillOpacity: any): void;
        setFillRule(fillRule: any): void;
        setClassName(className: any): void;
        setAttribution(val: any): void;
        setName(): void;
        setLayerType(): void;
        setVisible(isVisible: any): void;
        bindPopup(leafletObject: any): void;
        bindTooltip(leafletObject: any): void;
        unbindTooltip(): void;
        unbindPopup(): void;
        updateVisibleProp(value: any): void;
    };
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
export interface ArrowheadOptions extends L.PolylineOptions, SingleArrowheadOptions {
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
    perArrowheadOptions?: (i: number) => L.PolylineOptions & SingleArrowheadOptions;
}
declare module "leaflet" {
    interface Polyline {
        /**
         * Adds arrowheads to an L.polyline.  See documentation at https://github.com/slutske22/leaflet-arrowheads
         * @param {object} options The options for the arrowhead.  See documentation for details
         * @returns The L.polyline instance that they arrowheads are attached to
         */
        arrowheads: (options: ArrowheadOptions) => L.Polyline;
    }
}
export {};
