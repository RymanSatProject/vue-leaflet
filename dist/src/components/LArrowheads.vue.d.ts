import type L from "leaflet";
/**
 * Arrowheads component, used to add arrowheads to a polyline
 */
declare const _sfc_main: import("vue").DefineComponent<{
    readonly smoothFactor: {
        readonly type: NumberConstructor;
    };
    readonly noClip: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly latLngs: {
        readonly type: import("vue").PropType<L.LatLngExpression[]>;
        readonly required: true;
        readonly custom: true;
    };
    readonly arrowheadsOptions: {
        /**
         * Arrowheads component, used to add arrowheads to a polyline
         */
        readonly type: import("vue").PropType<import('../functions/arrowheads').ArrowheadOptions>;
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
    /**
     * Arrowheads component, used to add arrowheads to a polyline
     */
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
        readonly type: import("vue").PropType<import("../types/enums/LayerType").LayerType>;
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
}, {
    ready: import("vue").Ref<boolean>;
    leafletObject: import("vue").Ref<L.Polyline<import("geojson").LineString | import("geojson").MultiLineString, any> | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly smoothFactor: {
        readonly type: NumberConstructor;
    };
    readonly noClip: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly latLngs: {
        readonly type: import("vue").PropType<L.LatLngExpression[]>;
        readonly required: true;
        readonly custom: true;
    };
    readonly arrowheadsOptions: {
        /**
         * Arrowheads component, used to add arrowheads to a polyline
         */
        readonly type: import("vue").PropType<import('../functions/arrowheads').ArrowheadOptions>;
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
    /**
     * Arrowheads component, used to add arrowheads to a polyline
     */
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
        readonly type: import("vue").PropType<import("../types/enums/LayerType").LayerType>;
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
}>>, {
    readonly fill: boolean;
    readonly noClip: boolean;
    readonly arrowheadsOptions: import('../functions/arrowheads').ArrowheadOptions;
    readonly stroke: boolean;
    readonly interactive: boolean;
    readonly bubblingMouseEvents: boolean;
    readonly visible: boolean;
    readonly options: Record<string, any>;
}>;
export default _sfc_main;
