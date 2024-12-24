export class ImageTextConverterEntity {
	id: string;
	image: string;
	text: string;

	constructor(id: string, image: string, text: string) {
		this.id = id;
		this.image = image;
		this.text = text;
	}
}
