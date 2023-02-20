export enum SupportedCurrencies {
	TON,
	USD
}

export class CurrencyBuilder {
	formattedValue: string
	currency: SupportedCurrencies

	constructor(value: string | number, currency?: SupportedCurrencies) {
		this.formattedValue = value.toString()

		if (currency) {
			this.currency = currency
			return
		}

		this.currency = SupportedCurrencies.TON
	}

	addPrecision(precision: number) {
		this.formattedValue = parseFloat(this.formattedValue).toFixed(precision)
		return this
	}

	addPrecisionIfTruthy(boolish: boolean, precision: number) {
		if (boolish) {
			this.addPrecision(precision)
		}

		return this
	}

	switchCurrency(currency: SupportedCurrencies) {
		this.currency = currency
		return this
	}

	build() {
		switch (this.currency) {
			case SupportedCurrencies.USD:
				return `$ ${this.formattedValue}`

			default:
				return `${this.formattedValue} 💎`
		}
	}
}