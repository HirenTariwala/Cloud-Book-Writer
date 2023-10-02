export type InputProps = {
    name: string;
    type: string;
    value: string;
    placeholder: string;
    onChange(name: string, value: string): void;
    classname: string;
    error?: string;
}