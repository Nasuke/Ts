
type Sheldon = 'bazinga' | 'yummy' | 'moonpie' | null 

type SdexYY = NonNullable<Sheldon>

// 排除undefined null类型 
// 依旧是条件分发
type myNonnullable<T, K> = T extends null | undefined ? never : T

type Sdexm = myNonnullable<Sheldon, 'moonpie'>

export { }