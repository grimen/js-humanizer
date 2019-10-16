
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
const DEFAULT_HUMANIZER_UNIT = 's'

const DURATION_UNITS = [
    // NOTE: skipping lower than `s` for now - to avoid m(x)
    // 'ns',
    // 'µs',
    // 'ms',

    's',
    'm',
    'h',
    'd',

    // NOTE: skipping higher than `day` for now - to avoid lowercase (m)inute vs (m)onth
    // 'm',
    // 'y',
]

const DURATION_UNITS_FORMATTED = [
    // NOTE: skipping lower than `s` for now - to avoid m(x)
    // 'ns',
    // 'µs',
    // 'ms',

    's',
    'm',
    'h',
    'd',

    // NOTE: skipping higher than `day` for now - to avoid lowercase (m)inute vs (m)onth
    // 'm',
    // 'y',
]

const DURATION_UNITS_LABELS = [
    // NOTE: skipping lower than `s` for now - to avoid m(x)
    // 'ns',
    // 'µs',
    // 'ms',

    'second',
    'minute',
    'hour',
    'day',

    // NOTE: skipping higher than `day` for now - to avoid lowercase (m)inute vs (m)onth
    // 'm',
    // 'y',
]

const DURATION_UNIT_VALUE_MAP = {
    // NOTE: skipping lower than `s` for now - to avoid m(x)
    // 'ns': undefined,
    // 'µs': undefined,
    // 'ms': undefined,

    's': 1,
    'm': 1 * 60,
    'h': 1 * 60 * 60,
    'd': 1 * 60 * 60 * 24,

    // NOTE: skipping higher than `day` for now - to avoid lowercase (m)inute vs (m)onth
    // 'm': undefined,
    // 'y': undefined,
}

const DURATION_UNIT_LABEL_MAP = {
    // NOTE: skipping lower than `s` for now - to avoid m(x)
    // 'ns': undefined,
    // 'µs': undefined,
    // 'ms': undefined,

    's': 'second',
    'sec': 'second',
    'min': 'minute',
    'h': 'hour',
    'hr': 'hour',
    'd': 'day',

    // NOTE: skipping higher than `day` for now - to avoid lowercase (m)inute vs (m)onth
    // 'm': undefined,
    // 'y': undefined,
}

const DURATION_LABELS = Object.values(DURATION_UNIT_LABEL_MAP)

const DURATION_STRING_PARSE_PATTERN = `[0-9.]+\\s*(${DURATION_UNITS.join('|')})?`


/* =========================================
      ERRORS
-------------------------------------- */

class HumanizerError extends mybad.Error {}


/* =========================================
      FUNCTIONS
-------------------------------------- */

function value (value, options = {}) {
    const units = DURATION_UNITS
    const unitsLabels = DURATION_UNITS_LABELS
    const unitSecondsUnitMap = DURATION_UNIT_VALUE_MAP

    const valueUnitPattern = new RegExp(DURATION_STRING_PARSE_PATTERN, 'i')

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

            formattedValue = formattedValue.replace(unitLabelPlural, unitLabel) // `seconds` => `s`, etc.
            formattedValue = formattedValue.replace(unitLabel, unitByIndex) // `second` => `s`, etc.
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

        let resultValue = result[0]
        let resultUnit = result[1]

        let seconds = 0

        if (resultValue) {
            seconds = parseFloat(resultValue)

            if (resultUnit) {
                resultUnit = resultUnit.toLowerCase()

                const unitSeconds = unitSecondsUnitMap[resultUnit]

                seconds = seconds * unitSeconds
            }
        }

        return seconds

    } catch (error) {
        throw new HumanizerError(error, {
            details: {
                value,
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

    let units = DURATION_UNITS
    let unitsFormatted = DURATION_UNITS_FORMATTED
    let unitsLabels = DURATION_UNITS_LABELS

    let unitValueMap = DURATION_UNIT_VALUE_MAP
    let unitLabelMap = DURATION_UNIT_LABEL_MAP

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

function withOptions(defaults = {}) {
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
