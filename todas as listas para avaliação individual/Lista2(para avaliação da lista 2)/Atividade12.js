//informe um animal -> ani = ?
//informe uma caracteristica desse animal -> carac = ?
//imprima verdadeiro ou falso
console.log("")
console.log("----responda as perguntas sobre certas características de animais para que o programa adivinhe ele.----");
console.log("")

pacote=require("readline-sync")
console.log("pense em um dos seguintes animais e responda as questões a seguir: galinha, pato, águia, pinguin, avestruz, morcego, ornitorrinco leão, gato, onça, baleia, enguia, arraia, lambari")
console.log("responda 1 para sim e 2 para nao em todas as perguntas a seguir  ")
perg1=pacote.questionFloat("o animal tem penas? ")

function caracteristica(){
    if (perg1==1) {
        perg2=pacote.questionFloat("tem nadadeiras? ")
        if (perg2==1) {
            console.log("é um pato")
        } else {
        perg3=pacote.questionFloat("tem presas?")
        if (perg3==1) {
            console.log("é uma águia")
        } else {
            perg4=pacote.questionFloat("vive nas neves?  ")
         if (perg4==1) {
             console.log("é um pinguin")
         } else {
            perg5=pacote.questionFloat("cacareja?  ")
            if (perg5==1) {
                console.log("é uma galinha")
            } else {
                perg6=pacote.questionFloat("e grande e tem pescoco grande?  ")
                if (perg6==1) {
                    console.log("é um avestruz")
                } else {
                    console.log("impossível identificar o animal")
                        }
                    }
                }
            }
        }
    }
    if (perg1==2) {
        perg7=pacote.questionFloat("voa e chupa sangue?  ")
        if (perg7==1) {
            console.log("é um morçego")
        } else {
            perg8=pacote.questionFloat("bota ovos e tem bico grande?  ")
            if (perg8==1) {
                console.log("é um ornitorrinco")
            } else {
                perg9=pacote.questionFloat("ruge?  ")
                if (perg9==1) {
                    console.log("é um leão")
                } else {
                    perg10=pacote.questionFloat("mia?  ")
                    if (perg10==1) {
                        console.log("é um gato")
                    } else {
                        perg11=pacote.questionFloat("tem pintas?  ")
                        if (perg11==1) {
                            console.log("é uma onça")
                        } else {
                            perg12=pacote.questionFloat("e o maior animal marinho do mundo?  ")
                            if (perg12==1) {
                                console.log("é uma baleia")
                            } else {
                                perg13=pacote.questionFloat(" vive na agua e da choque?  ")
                                if (perg13==1) {
                                    console.log("é uma enguia")
                                } else {
                                    perg14=pacote.questionFloat("vive na agua e parece uma ave?  ")
                                    if (perg14==1) {
                                        console.log("é uma arraia")
                                    } else {
                                        perg15=pacote.questionFloat("vive na agua, e pequeno e tem escamas?  ")
                                        if (perg15==1) {
                                            console.log("é um lambari")
                                        } else {
                                            console.log("impossível identificar o animal")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
caracteristica();