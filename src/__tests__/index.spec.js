import { map, filter, reject, isNil } from 'ramda'

describe('babel operators', () => {
    it('should work', () => {
        expect(
            [1, 2, 3]
            |> map(_ => _ * 2)
            |> filter(_ => _ > 4)
            |> map(_ => _ * 4)).toMatchSnapshot()
    })
})