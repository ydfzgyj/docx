import { XmlAttributeComponent } from "../../../../../file/xml-components";
export declare enum FooterReferenceType {
    DEFAULT = "default",
    FIRST = "first",
    EVEN = "even"
}
export interface IFooterReferenceAttributes {
    type: string;
    id: string;
}
export declare class FooterReferenceAttributes extends XmlAttributeComponent<IFooterReferenceAttributes> {
    protected xmlKeys: {
        type: string;
        id: string;
    };
}
