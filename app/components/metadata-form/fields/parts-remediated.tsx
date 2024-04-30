import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const PartsRemediated = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="parts-remediated"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Parts Remediated</FormLabel>
                    <FormControl>
                        <Input placeholder="Parts remediated" {...field} />
                    </FormControl>
                    <FormDescription>
                        The parts of the document that have been remediated.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}