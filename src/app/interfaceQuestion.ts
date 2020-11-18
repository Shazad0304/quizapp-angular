export interface IQuestion{
    questions:{
        question:string,
        options:string[]
    }

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
    code:String,
    attemptedBy:String,
    images:String[]
    answers:{
        ques:String,
        ans:String
    }[]
}