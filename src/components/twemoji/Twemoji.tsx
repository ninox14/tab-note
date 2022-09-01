import React, { FC } from 'react'
import NextImage from 'next/image'
import twemoji from 'twemoji'

const U200D = String.fromCharCode(0x200d)
const UFE0Fg = /\uFE0F/g

interface Props {
  emoji: string
  ext?: 'svg' | 'png'
  width?: number | string
  height?: number | string
}

const Twemoji: FC<Props> = ({ emoji, ext = 'svg', width = 72, height = 72 }) => {
  const HEXCodePoint = twemoji.convert.toCodePoint(emoji.indexOf(U200D) < 0 ? emoji.replace(UFE0Fg, '') : emoji)

  return (
    <NextImage
      src={`https://twemoji.maxcdn.com/v/latest/${ext === 'png' ? '72x72' : 'svg'}/${HEXCodePoint}.${ext}`}
      width={width}
      height={height}
      alt={emoji}
      draggable={false}
    />
  )
}

export default React.memo(Twemoji)
