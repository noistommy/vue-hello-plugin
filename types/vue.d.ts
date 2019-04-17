declare type PluginAddFunction = (a: number, b: number) => number;
declare module 'vue/types/vue' {
    interface Vue {
        $add: PluginAddFunction;
    }
}
