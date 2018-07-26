import { IMediaData } from "../../file/media";
import { XmlComponent } from "../../file/xml-components";
import { Paragraph } from "../paragraph";
import { Table } from "../table";
export declare class Header extends XmlComponent {
    private refId;
    constructor(referenceNumber: number);
    readonly referenceId: number;
    addParagraph(paragraph: Paragraph): void;
    createParagraph(text?: string): Paragraph;
    addTable(table: Table): void;
    createTable(rows: number, cols: number): Table;
    addDrawing(imageData: IMediaData): void;
}
