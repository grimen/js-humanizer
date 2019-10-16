
/* =========================================
      IMPORTS
-------------------------------------- */

const mybad = require('@grimen/mybad')

const { sprintf } = require('sprintf-js')


/* =========================================
      CONSTANTS
-------------------------------------- */

const DEFAULT_HUMANIZER_SILENT = false
const DEFAULT_HUMANIZER_EXPAND = false
const DEFAULT_HUMANIZER_LETTERCASE = 'default' // casing?
const DEFAULT_HUMANIZER_SPACE = true // spacing?
const DEFAULT_HUMANIZER_UNIT = 'b'

const BYTESIZE_UNITS = [
    'b',
    'kb',
    'mb',
    'gb',
    'tb',
]

const BYTESIZE_UNITS_FORMATTED = [
    'B',
    'kB',
    'MB',
    'GB',
    'TB',
]

const BYTESIZE_UNITS_LABELS = [
    'byte',
    'kilobyte',
    'megabyte',
    'gigabyte',
    'terabyte',
]

const BYTESIZE_UNIT_VALUE_MAP = {
    'b': Math.pow(1024, 0),
    'kb': Math.pow(1024, 1),
    'mb': Math.pow(1024, 2),
    'gb': Math.pow(1024, 3),
    'tb': Math.pow(1024, 4),
}

const BYTESIZE_UNIT_LABEL_MAP = {
    'b': 'byte',
    'kb': 'kilobyte',
    'mb': 'megabyte',
    'gb': 'gigabyte',
    'tb': 'terabyte',
}

const BYTESIZE_LABELS = Object.values(BYTESIZE_UNIT_LABEL_MAP)

const BYTESIZE_STRING_PARSE_PATTERN = `([0-9.]+)\\s*(${BYTESIZE_UNITS.join('|')})?`


/* =========================================
      ERRORS
-------------------------------------- */

class HumanizerError extends mybad.Error {}

class NotImplementedError extends mybad.Error {}


/* =========================================
      FUNCTIONS
-------------------------------------- */

function value (value, options = {}) {
    const units = BYTESIZE_UNITS
    const unitsLabels = BYTESIZE_UNITS_LABELS
    const unitBytesUnitMap = BYTESIZE_UNIT_VALUE_MAP

    const valueUnitPattern = new RegExp(BYTESIZE_STRING_PARSE_PATTERN, 'i')

    try {
        if (typeof value === 'undefined') {
            return 0
        }

        if (value === null) {
            return 0
        }

        let formattedValue = `${value}`.toLowerCase()

        for (let [index, unit] of Object.entries(units).reverse()) {
            const unitByIndex = units[index]

            const unitLabel = unitsLabels[index]
            const unitLabelPlural = `${unitLabel}s`

            formattedValue = formattedValue.replace(unitLabelPlural, unitLabel) // `kilobytes` => `kb`, etc.
            formattedValue = formattedValue.replace(unitLabel, unitByIndex) // `kilobyte` => `kb`, etc.
        }

        const result = formattedValue.match(valueUnitPattern)

        if ((typeof result === 'undefined') || (result === null) || (result.length <= 0)) {
            throw new HumanizerError(`Expected valid number (\`<value:int|float>\`) or string (\`"<value:int|float> <unit:string>"\`) but got value \`${value}\` (${typeof value})`, {
                details: {
                    value,
                    result,
                },
            })
        }

        let sizeValue = result[1]
        let sizeUnit = result[2]

        let bytes = 0

        if (sizeValue) {
            bytes = parseFloat(sizeValue)

            if (sizeUnit) {
                sizeUnit = sizeUnit.toLowerCase()

                const unitBytes = unitBytesUnitMap[sizeUnit]

                bytes = bytes * unitBytes
            }
        }

        bytes = parseInt(Math.round(bytes))

        return bytes

    } catch (error) {
        throw new HumanizerError(error, {
            details: {
                value,
                options,
            },
        })
    }
}

function human (value, ...args) {
    let options

    const arg = args[0]

    if (typeof arg === 'string') {
        options = {}
        options.unit = arg

    } else {
        options = arg || {}
    }

    let {
        unit,
        expand,
        lettercase,
        space,
    } = options

    unit = unit || DEFAULT_HUMANIZER_UNIT
    expand = expand || DEFAULT_HUMANIZER_EXPAND
    lettercase = lettercase || DEFAULT_HUMANIZER_LETTERCASE
    space = space || DEFAULT_HUMANIZER_SPACE

    let units = BYTESIZE_UNITS
    let unitsFormatted = BYTESIZE_UNITS_FORMATTED
    let unitsLabels = BYTESIZE_UNITS_LABELS

    let unitValueMap = BYTESIZE_UNIT_VALUE_MAP
    let unitLabelMap = BYTESIZE_UNIT_LABEL_MAP

    try {
        if (typeof value === 'undefined') {
            return null
        }

        if (value === null) {
            return null
        }

        let _value = value
        let _unit

        if (typeof value === 'string') {
            _value = module.exports.value(_value)
        }

        _value = parseFloat(_value)

        if (unit === 'auto') {
            throw new NotImplementedError('Not implemented yet')

        } else {
            _unit = (unit || DEFAULT_HUMANIZER_UNIT).toLowerCase()
            _value = _value / parseFloat(unitValueMap[_unit])
        }

        if (_value < 0) {
            throw new HumanizerError(`Expected \`value >= 0\`, but was \`${_value}\``, {
                details: {
                    'value': _value,
                },
            })
        }

        if (_value >= Infinity) {
            throw new HumanizerError(`Expected \`value < ∞\`, but was \`${_value}\``, {
                details: {
                    'value': _value,
                }
            })
        }

        if (space) {
            separator = ' '

        } else {
            separator = ''
        }

        const formatString = '%(value)s %(unit)s'

        if (Number.isInteger(_value)) {
            _value = parseInt(_value)

            valueString = sprintf(formatString, {value: _value, unit: _unit})
            // valueString = `${value}s ${unit}s` // formatString % dict(value = _value, unit = _unit)

        } else {
            _value = parseFloat(sprintf('%.1g', _value)) // `0.000123` => `0.0001`, etc.

            valueString = sprintf(formatString, {value: _value, unit: _unit})
            valueString = sprintf(formatString, {value: sprintf('%f', _value).replace(/0$/i, ''), unit: _unit})
        }

        if (expand) {
            for (const __unit of units) {
                valueString.replace(unitValueMap[__unit], unitLabelMap[__unit]) // `mb` => 'megabytes', etc.
            }
        }

        if (lettercase) {
            if (lettercase.includes('low') || lettercase.includes('down')) {
                valueString = valueString.toLowerCase()

            } else if (lettercase.includes('up')) {
                valueString = valueString.toUpperCase()

            } else {
                valueString = valueString.toLowerCase()

                for (const [index, _] of Object.entries(units.slice(1)).reverse()) {
                    valueString = valueString.replace(units[index], unitsFormatted[index]) // `kb` => `kB`, etc.
                }
            }
        }

        return valueString

    } catch (error) {
        throw new HumanizerError(error, {
            details: {
                value,
                options,
            },
        })
    }
}


/* =========================================
      FACTORIES
-------------------------------------- */

function withOptions (defaults = {}) {
    return {
        defaults,

        value: (value, options = {}) => {
            return value(value, {...defaults, ...options})
        },

        human: (value, options = {}) => {
            return human(value, {...defaults, ...options})
        },
    }
}


/* =========================================
      EXPORTS
-------------------------------------- */

module.exports = {
    value,
    human,

    withOptions,
}
