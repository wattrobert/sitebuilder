import { Url } from "url";

export const SbFormFieldTypes = {
    title: 'text',
    text: 'textarea',
    html: 'wysiwyg',
    background: 'color',
    color: 'color',
    font: 'font',
    image: 'file',
    contained: 'checkbox',
    json: 'object',
    button: ['button']
}

export type SbFormFieldConfig = Array<'title'|'text'|'html'|'json'|'background'|'color'|'font'|'image'|'contained'|'image'>;
export type SbComponentType = 'jumbotron'|'html'|'pre';

export class SbComponent {
    name: string;
    type: SbComponentType;
    config: SbFormFieldConfig;

    constructor(componentName: string, componentType:SbComponentType, componentConfig:SbFormFieldConfig) {
        this.name = componentName;
        this.type = componentType;
        this.config = componentConfig;
    }
}

export class SbJumbotronComponent extends SbComponent {
    constructor(name:string) {
        super(name, 'jumbotron', ['title', 'text', 'color', 'background'])
    }
}
export class SbHtmlComponent extends SbComponent {
    constructor(name:string) {
        super(name, 'html', ['html', 'color', 'background'])
    }
}
export class SbPreComponent extends SbComponent {
    constructor(name:string) {
        super(name, 'pre', ['text', 'color', 'background'])
    }
}

export interface SbButton {
    type: 'primary' | 'secondary',
    color: 'light' | 'dark';
    text: string;
    link: Url;
}
