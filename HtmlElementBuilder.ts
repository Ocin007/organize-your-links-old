export class HtmlElementBuilder {
    private htmlMainElement: HTMLElement;
    private htmlTag: string;
    private htmlAttributes: Object;
    private htmlStyle: Object;
    private htmlChildElements: HtmlElementBuilder[];

    public constructor(tag: string, attributes: Object, style: Object) {
        this.htmlTag = tag;
        this.htmlAttributes = attributes;
        this.htmlStyle = style;
        this.htmlChildElements = [];
    }

    private addAttributeToBuild(key: string, attribute: any) {
        if(key === 'classList') {
            for(let j of attribute) {
                this.htmlMainElement.classList.add(j);
            }
        } else {
            this.htmlMainElement[key] = attribute;
        }
    }

    private addStyleToBuild(key: string, attribute: string) {
        this.htmlMainElement.style[key] = attribute;
    }

    private buildElement() {
        this.htmlMainElement = document.createElement(this.htmlTag);
        for(let key in this.htmlAttributes) {
            this.addAttributeToBuild(key, this.htmlAttributes[key]);
        }
        for(let key in this.htmlStyle) {
            this.addStyleToBuild(key, this.htmlStyle[key]);
        }
        for(let child of this.htmlChildElements) {
            this.htmlMainElement.appendChild(child.get());
        }
    }

    public get() {
        this.buildElement();
        return this.htmlMainElement;
    }

    public addChild(child: HtmlElementBuilder) {
        this.htmlChildElements.push(child);
    }

    public editAttribute(key: string, value: string) {
        this.htmlAttributes[key] = value;
    }

    public editClassList(str: string) {
        var index = this.htmlAttributes['classList'].indexOf(str);
        if(index !== -1) {
            this.htmlAttributes['classList'] = this.removeClassFromClassList(index);
        } else {
            this.htmlAttributes['classList'].push(str);
        }
    }
    
    private removeClassFromClassList(index: number) {
        var helperArray: string[];
        for(let i in this.htmlAttributes['classList']) {
            if(parseInt(i) !== index) {
                helperArray.push(this.htmlAttributes['classList'][i]);
            }
        }
        return helperArray;
    }

    public editStyle(key: string, value: string) {
        this.htmlStyle[key] = value;
    }
}