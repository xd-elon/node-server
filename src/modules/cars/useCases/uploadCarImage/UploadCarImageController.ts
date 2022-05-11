import { Response, Request } from "express";
import { container } from "tsyringe";
import { UploadCarImageUseCase } from "./UploadCarImageUseCase";

class UploadCarImageController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const images = request.files;

    const fileNames = images.map((file) => file.filename);

    const uploadCarImageUseCase = container.resolve(UploadCarImageUseCase);

    await uploadCarImageUseCase.execute()
  }
}

export { UploadCarImageController };
