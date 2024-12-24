export interface IImageTextConverterInterface {
	convertImageToText(image: string): Promise<string>;
}
