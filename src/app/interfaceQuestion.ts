export interface IQuestion{
    question:string,
    opt1:string,
    opt2:string,
    opt3:string,
    opt4:string,
}

export interface IAns{
    question:string,
    answer:string
}

export interface IUsers{
    user: number,
    pass: string,
    name: string
}