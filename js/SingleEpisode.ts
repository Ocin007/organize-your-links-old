class SingleEpisode extends HtmlElementBuilder {
    // Ajax Data
    private id: number;
    private isSeries: number = 0;
    private isFavorit: number;
    private title: string;
    private categoryList: string[];
    private status: number;
    private note: string;
    private link: string;

    public getAjaxData() {
        return JSON.stringify({
            id: this.id,
            isSeries: this.isSeries,
            isFavorit: this.isFavorit,
            title: this.title,
            categoryList: this.categoryList,
            status: this.status,
            note: this.note,
            link: this.link
        });
    }

    public setIsFavorit(value: number) {
        console.log(value);
        this.isFavorit = value;
    }

    public setTitle(value: string) {
        console.log(value);
        this.title = value;
    }

    public setNote(value: string) {
        console.log(value);
        this.note = value;
    }

    public setLink(value: string) {
        console.log(value);
        this.link = value;
    }

    public setStatus(value: number) {
        console.log(value);
        this.status = value;
    }

    public setCategoryList(value: Array) {
        console.log(value);
        this.categoryList = value;
    }

    public setId(value: number) {
        console.log(value);
        this.id = value;
    }
}