import fs from "fs";

export class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createWriteStream(file.path);

    stream.pipe();
  }
}
