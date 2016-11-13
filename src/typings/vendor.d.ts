declare module 'csjs' {
    const lib: any;
    function getCss(css: any): string;
    function csjs(...css: Array<any>): any;
    function csjs(css: any): any;

    export default lib;
    export { csjs, getCss };
}

declare module 'insert-css' {
    const lib: any;
	function insertCss(css: any): void;

    export default lib;
    export { insertCss };
}