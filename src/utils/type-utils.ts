// biome-ignore lint/complexity/noBannedTypes: Allowing '{}' as default for generic type parameter to support empty props
export type PropsWithClassName<T extends object = {}> = T & {
  className?: string;
};
