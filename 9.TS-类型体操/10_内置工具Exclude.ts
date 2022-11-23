

type Sheldon = 'bazinga' | 'yummy' | 'moonpie'

type SdexYY = Exclude<Sheldon, 'yummy'>

// 实现
// 依旧是条件分发
type myExclude<T, K> = T extends K ? never : T

type Sdexm = myExclude<Sheldon, 'moonpie'>

export {}