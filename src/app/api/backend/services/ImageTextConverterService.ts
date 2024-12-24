import type { IImageTextConverterInterface } from "../interfaces/ImageTextConverterInterface";
import type { ImageTextConverterRepository } from "../repositories/ImageTextConverterRepository";

export class ImageTextConverterService implements IImageTextConverterInterface {
	private repository: ImageTextConverterRepository;

	constructor(repository: ImageTextConverterRepository) {
		this.repository = repository;
	}

	async convertImageToText(image: string): Promise<string> {
		const result = await this.repository.convertImageToText(image);
		return result.text; // assuming 'text' is the property containing the string
	}
}
