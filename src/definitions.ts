declare global {
    interface PluginRegistry {
        BarcodeScanner?: BarcodeScanner;
    }
}
export interface BarcodeScanner {
    scan(): any;
    encode(): any;
}
