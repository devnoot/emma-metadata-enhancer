import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import MultiSelectFormField from '@/components/ui/multi-select'

import { accessibilityFeaturesOptions } from '../field-options'

export const AccessibilityFeatures = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name='accessibilityFeatures'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Accessibility Features</FormLabel>
          <FormControl>
            <MultiSelectFormField
              options={accessibilityFeaturesOptions}
              defaultValue={field.value}
              onValueChange={field.onChange}
              placeholder='Select accessibility features'
              variant='inverted'
            />
          </FormControl>
          <FormDescription>
            What accessibility features are available?
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
