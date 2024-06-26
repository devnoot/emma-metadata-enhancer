import { cn } from '@/lib/utils'
import { Copy } from 'lucide-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  a11yDark,
  a11yLight
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { useTheme } from './theme-provider'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'

export type CodeBlockProps = {
  code: string
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const { toast } = useToast()

  const { theme } = useTheme()

  return (
    <div id='code-block' className='border'>
      <CopyToClipboardButton
        code={code}
        onCopy={() => toast({ description: 'Metadata copied to clipboard' })}
      />
      <SyntaxHighlighter
        language='html'
        style={theme === 'dark' ? a11yDark : a11yLight}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export type CopyToClipboardButtonProps = {
  code: string
  onCopy: (text: string, result: boolean) => void
}

export const CopyToClipboardButton = ({
  code,
  onCopy
}: CopyToClipboardButtonProps) => (
  <div className={cn('absolute', 'top-0', 'right-0', 'p-6')}>
    <Button size='sm' variant='secondary'>
      <CopyToClipboard text={code} onCopy={onCopy}>
        <span className={cn('inline-flex', 'items-center')}>
          <Copy className='mr-1 h-4 w-4' /> Copy
        </span>
      </CopyToClipboard>
    </Button>
  </div>
)
