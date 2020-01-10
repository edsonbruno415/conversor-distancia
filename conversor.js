$(function () {
    const isFull = (txtElement) => {
        if (txtElement) {
            return txtElement
        } else {
            return false
        }
    }
    const milhasElement = $('#milhas')
    const metrosElement = $('#metros')
    const btn = $('#btn')
    const inputs = $('input')

    inputs.focus(()=>{
        milhasElement.val('')
        metrosElement.val('')
    })
    btn.click(function () {
        if(isFull(metrosElement.val()) && milhasElement.is(':empty')){
            const milhasConvertidas = parseFloat(metrosElement.val()) / 1609.34
            milhasElement.val(milhasConvertidas.toPrecision(6))
        }else if(isFull(milhasElement.val()) && metrosElement.is(':empty')){
            const metrosConvertidos = parseFloat(milhasElement.val()) * 1609.34
            metrosElement.val(metrosConvertidos.toPrecision(6))
        }
    })
})