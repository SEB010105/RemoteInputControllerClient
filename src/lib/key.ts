import {writable, type Writable} from "svelte/store";

export class Key {
    #keyIndex: 0 | 1 | 2 = 0;
    toggled: Writable<boolean> = writable(false);
    content: Writable<string> = writable();

    constructor(
        public primary: string,
        public secondary?: string,
        public tertiary?: string,
        public toggleable: boolean = false,
        public svg?: string,
        public toggleFunctionality?: (value: boolean) => void
    ) {
        this.content.set(this.#content);
    }

    get keys() {
        return [this.primary, this.secondary, this.tertiary];
    }

    get currentKey() {
        let key = this.keys[this.#keyIndex];

        return key ?? this.primary;
    }

    set keyIndex(newIndex: 0|1|2) {
        this.#keyIndex = newIndex;

        this.content.set(this.#content);
    }

    get #content() {
        if (this.svg)
            return this.svg;

        return this.currentKey;
    }

    toggle() {
        this.toggled.update(t => !t);
    }
}