import { ImageTextConverterEntity } from "../entities/ImageTextConverterEntity";

export class ImageTextConverterRepository {
	private db: string;

	constructor(db: string) {
		this.db = db;
	}

	async convertImageToText(image: string): Promise<ImageTextConverterEntity> {
		// Implementação da lógica de negócios aqui

		return new ImageTextConverterEntity("", image, "");
	}
}
