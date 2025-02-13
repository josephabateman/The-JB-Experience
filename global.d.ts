interface NetworkInformation extends EventTarget {
    readonly effectiveType?: 'slow-2g' | '2g' | '3g' | '4g' | 'unknown';
    readonly downlink?: number;
    readonly rtt?: number;
    readonly saveData?: boolean;
    onchange?: EventListener;
  }
  
  interface Navigator {
    connection?: NetworkInformation;
  }
  