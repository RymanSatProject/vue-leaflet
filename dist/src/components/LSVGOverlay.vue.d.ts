import type L from "leaflet";
/**
 * SVGOverlay component, used to load, display and provide DOM access to an SVG
 * file over specific bounds of the map
 */
declare const _sfc_main: import("vue").DefineComponent<{
    readonly url: {
        readonly type: import("vue").PropType<string | SVGElement>;
        readonly required: true;
        readonly custom: true;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
    };
    readonly alt: {
        readonly type: StringConstructor;
    };
    readonly interactive: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    /**
     * SVGOverlay component, used to load, display and provide DOM access to an SVG
     * file over specific bounds of the map
     */
    readonly crossOrigin: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly errorOverlayUrl: {
        readonly type: StringConstructor;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly bounds: {
        readonly type: import("vue").PropType<L.LatLngBoundsExpression>;
        readonly required: true;
        readonly custom: true;
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
    leafletObject: import("vue").Ref<L.SVGOverlay | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly url: {
        readonly type: import("vue").PropType<string | SVGElement>;
        readonly required: true;
        readonly custom: true;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
    };
    readonly alt: {
        readonly type: StringConstructor;
    };
    readonly interactive: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    /**
     * SVGOverlay component, used to load, display and provide DOM access to an SVG
     * file over specific bounds of the map
     */
    readonly crossOrigin: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly errorOverlayUrl: {
        readonly type: StringConstructor;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly bounds: {
        readonly type: import("vue").PropType<L.LatLngBoundsExpression>;
        readonly required: true;
        readonly custom: true;
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
    readonly interactive: boolean;
    readonly visible: boolean;
    readonly options: Record<string, any>;
    readonly crossOrigin: boolean;
}>;
export default _sfc_main;
