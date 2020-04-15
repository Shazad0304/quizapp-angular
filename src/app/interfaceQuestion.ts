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
    user: string,
    pass: string,
    name: string
    points?: number
}

export interface IResults{
    name:string,
    user:string,
    points?:number
}