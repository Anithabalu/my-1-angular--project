export class Recipe {
    public recipeName: string;
    public description: string;
    public imagePath: string;
constructor(name: string, desc:string, imgPath:string)
{
this.recipeName = name;
this.description = desc;
this.imagePath = imgPath;
}
}