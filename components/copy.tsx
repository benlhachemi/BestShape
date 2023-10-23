'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react'

export default function CopyLink({ params }: { params: any }) {
  const [is_copied, setIsCopied] = useState<boolean>(false)

  useEffect(() => {
    if (is_copied) {
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    }
  }, [is_copied])

  const copy = () => {
    navigator.clipboard.writeText(`https://bestshape.fit/program/${params.slug}`)
    setIsCopied(true)
  }

  return (
    <Card className="max-w-lg bg-neutral-50 overflow-hidden">
      <CardHeader>
        <CardTitle>Share this program</CardTitle>
        <CardDescription>Anyone with the link can view this program.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <Input contentEditable={false} value={`https://bestshape.fit/program/${params.slug}`} />
          <div className="relative">
            <Button onClick={copy} className="w-32">Copy Link</Button>
            {is_copied && (
              <div className="text-md text-neutral-400 absolute top-0 lg:-top-3/4 lg:animate__animated lg:animate__fadeInUp left-full lg:left-2/4 w-full translate-x-5 lg:translate-x-0">Copied👍</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
