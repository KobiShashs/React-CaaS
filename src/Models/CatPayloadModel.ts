class CatPayloadModel {
    public name?:string;
    public weight?: number;
    public color?: string;
    public birthday?: Date;
    public image? : FileList;

}

export default CatPayloadModel;