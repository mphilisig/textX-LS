import { join } from "path";
import { TreeItem, TreeItemCollapsibleState } from "vscode";
import { RESOURCES_PATH } from "../../constants";
import { ITextXGeneratorConfig } from "../../interfaces";

export class GeneratorNode extends TreeItem {

  public readonly contextValue = "generator";
  public readonly iconPath = {
    dark: join(RESOURCES_PATH , "dark", "gears.svg"),
    light: join(RESOURCES_PATH, "light", "gears.svg"),
  };

  constructor(
    public readonly language: string,
    public readonly target: string,
    public readonly configurations: ITextXGeneratorConfig[],
    public readonly desc?: string,
  ) {
    super(`${language}-${target}`, TreeItemCollapsibleState.Expanded);
  }

  public get tooltip(): string | undefined {
    return this.desc;
  }

  public get description(): string | undefined {
    return this.desc;
  }

}
