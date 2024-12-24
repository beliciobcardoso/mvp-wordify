import type { NextApiRequest, NextApiResponse } from "next";
import { ImageTextConverterRepository } from "../repositories/ImageTextConverterRepository";
import { ImageTextConverterService } from "../services/ImageTextConverterService";
const repository = new ImageTextConverterRepository("your-database-string");

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const imageTextConverterService = new ImageTextConverterService(repository);
	const result = await imageTextConverterService.convertImageToText(req.body);
	return res.json(result);
}
