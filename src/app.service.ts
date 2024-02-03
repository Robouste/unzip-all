import { Injectable, Logger } from '@nestjs/common';
import * as tamere from 'adm-zip';
import { readdirSync } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  unzip(inputPath: string): string[] {
    const outputPath = inputPath + '\\unzipped\\';

    const zipFiles = readdirSync(inputPath).filter((file) =>
      file.endsWith('.zip'),
    );

    const paths = [];

    for (const zipFile of zipFiles) {
      const fullPath = inputPath + '/' + zipFile;
      Logger.log(fullPath);
      paths.push(fullPath);

      const zipper = new tamere(fullPath);

      zipper.extractAllTo(outputPath + zipFile);
    }

    return paths;
  }
}
