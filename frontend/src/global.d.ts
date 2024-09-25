interface Ethereum {
    request: (args: { method: string }) => Promise<string | number | object | null>;
    // Puedes agregar otras propiedades si es necesario
}

interface Window {
    ethereum?: Ethereum;
}
