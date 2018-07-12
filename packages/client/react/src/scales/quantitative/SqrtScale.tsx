import { sqrt } from '@gog/scales'
import {
	QuantitativeScale,
	QuantitativeScaleProps,
	QuantitativeValue,
} from './QuantitativeScale'

export class SqrtScale extends QuantitativeScale<
	QuantitativeScaleProps<QuantitativeValue, number>,
	QuantitativeValue,
	number
> {
	protected createScale() {
		return sqrt(this.props.name)
			.table(this.props.table)
			.domain(this.props.domain)
			.bindDomain(this.props.bindDomain)
			.range(this.props.range)
			.bindRange(this.props.bindRange)
			.zero(this.props.zero)
			.clamp(this.props.clamp)
			.nice(this.props.nice)
			.padding(this.props.padding)
			.reverse(this.props.reverse)
			.build()
	}
}
