import { utc } from '@gog/scales'
import {
	QuantitativeScale,
	QuantitativeScaleProps,
	TimeValue,
} from './QuantitativeScale'

export class UtcScale extends QuantitativeScale<
	QuantitativeScaleProps<TimeValue, number>,
	TimeValue,
	number
> {
	protected createScale() {
		return utc(this.props.name)
			.name(this.props.name)
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
