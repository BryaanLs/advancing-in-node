import { readFile } from "fs/promises";
import error from "./constants.js";

const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ["id", "name", "profession", "age"],
};

class File {
  static async csvToJson(filePath) {
    const content = await File.getFileContent(filePath);
    const result = File.isValid(content);
    if (!result.valid) throw new Error(result.error);
    console.log("Passou");
    return content;
  }

  static async getFileContent(filePath) {
    return (await readFile(filePath)).toString("utf8");
  }

  static isValid(csvString, options = DEFAULT_OPTION) {
    const [header, ...restantedoarquivo] = csvString.split("\r\n");
    const headerIsValid = header === options.fields.join(",");
    const contentIsValid =
      restantedoarquivo.length === 0 ||
      restantedoarquivo.length <= options.maxLines;

    if (!headerIsValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false,
      };
    }

    if (!contentIsValid) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false,
      };
    }

    return {
      valid: true,
    };
  }
}

(async () => {
  // const result = await File.csvToJson(
  //   "./../aula01-mocks/mocks/invalid-header.csv"
  // );
  // const result = await File.csvToJson(
  //   "./../aula01-mocks/mocks/fourItems-invalid.csv"
  // );
  const result = await File.csvToJson(
    "./../aula01-mocks/mocks/invalid-header.csv"
  );
  // const result = await File.csvToJson(
  //   "./../aula01-mocks/mocks/threeItems-valid.csv"
  // );
  // console.log(result);
})();
