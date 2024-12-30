import type L from "leaflet";
import type { PropType } from "vue";
export declare const svgOverlayProps: {
    readonly url: {
        readonly type: PropType<string | SVGElement>;
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
        readonly type: PropType<L.LatLngBoundsExpression>;
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
        readonly type: PropType<import("../types/enums/LayerType").LayerType>;
        readonly custom: true;
    };
    /**
     * Returns the instance of SVGElement used by this overlay.
     * @returns {SVGElement}
     */
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
export declare const setupSVGOverlay: (props: any, leafletRef: any, context: any) => {
    options: L.ImageOverlayOptions;
    methods: {
        /**
         * Returns the instance of SVGElement used by this overlay.
         * @returns {SVGElement}
         */
        getElement(): any;
        setOpacity(opacity: any): any;
        setUrl(url: any): any;
        setBounds(bounds: any): any;
        getBounds(): any;
        bringToFront(): any;
        bringToBack(): any;
        setZIndex(zIndex: any): any;
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
