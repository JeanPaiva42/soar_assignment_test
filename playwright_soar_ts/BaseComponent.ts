import { Page } from "playwright/test";

class BaseComponent {

    private _page;

    constructor(page: Page) {

        this._page = page;
    }

    get page() {
        return this._page;
    }
}

export default BaseComponent;
