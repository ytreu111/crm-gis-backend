
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DirectoryFieldConstraint
 * 
 */
export type DirectoryFieldConstraint = $Result.DefaultSelection<Prisma.$DirectoryFieldConstraintPayload>
/**
 * Model IntegerFieldConstraint
 * 
 */
export type IntegerFieldConstraint = $Result.DefaultSelection<Prisma.$IntegerFieldConstraintPayload>
/**
 * Model StringFieldContraint
 * 
 */
export type StringFieldContraint = $Result.DefaultSelection<Prisma.$StringFieldContraintPayload>
/**
 * Model DateFieldContraint
 * 
 */
export type DateFieldContraint = $Result.DefaultSelection<Prisma.$DateFieldContraintPayload>
/**
 * Model DateTimeFieldContraint
 * 
 */
export type DateTimeFieldContraint = $Result.DefaultSelection<Prisma.$DateTimeFieldContraintPayload>
/**
 * Model TimeFieldContraint
 * 
 */
export type TimeFieldContraint = $Result.DefaultSelection<Prisma.$TimeFieldContraintPayload>
/**
 * Model PointFieldContraint
 * 
 */
export type PointFieldContraint = $Result.DefaultSelection<Prisma.$PointFieldContraintPayload>
/**
 * Model LineStringFieldContraint
 * 
 */
export type LineStringFieldContraint = $Result.DefaultSelection<Prisma.$LineStringFieldContraintPayload>
/**
 * Model PolygonFieldContraint
 * 
 */
export type PolygonFieldContraint = $Result.DefaultSelection<Prisma.$PolygonFieldContraintPayload>
/**
 * Model DirectoryField
 * 
 */
export type DirectoryField = $Result.DefaultSelection<Prisma.$DirectoryFieldPayload>
/**
 * Model Directory
 * 
 */
export type Directory = $Result.DefaultSelection<Prisma.$DirectoryPayload>
/**
 * Model Elements
 * 
 */
export type Elements = $Result.DefaultSelection<Prisma.$ElementsPayload>
/**
 * Model Layer
 * 
 */
export type Layer = $Result.DefaultSelection<Prisma.$LayerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DirectoryFieldType: {
  integer: 'integer',
  string: 'string',
  date: 'date',
  datetime: 'datetime',
  time: 'time',
  point: 'point',
  linestring: 'linestring',
  polygon: 'polygon'
};

export type DirectoryFieldType = (typeof DirectoryFieldType)[keyof typeof DirectoryFieldType]

}

export type DirectoryFieldType = $Enums.DirectoryFieldType

export const DirectoryFieldType: typeof $Enums.DirectoryFieldType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DirectoryFieldConstraints
 * const directoryFieldConstraints = await prisma.directoryFieldConstraint.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DirectoryFieldConstraints
   * const directoryFieldConstraints = await prisma.directoryFieldConstraint.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  /**
   * Gives access to the client metrics in json or prometheus format.
   * 
   * @example
   * ```
   * const metrics = await prisma.$metrics.json()
   * // or
   * const metrics = await prisma.$metrics.prometheus()
   * ```
   */
  readonly $metrics: runtime.MetricsClient
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.directoryFieldConstraint`: Exposes CRUD operations for the **DirectoryFieldConstraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectoryFieldConstraints
    * const directoryFieldConstraints = await prisma.directoryFieldConstraint.findMany()
    * ```
    */
  get directoryFieldConstraint(): Prisma.DirectoryFieldConstraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integerFieldConstraint`: Exposes CRUD operations for the **IntegerFieldConstraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntegerFieldConstraints
    * const integerFieldConstraints = await prisma.integerFieldConstraint.findMany()
    * ```
    */
  get integerFieldConstraint(): Prisma.IntegerFieldConstraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stringFieldContraint`: Exposes CRUD operations for the **StringFieldContraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StringFieldContraints
    * const stringFieldContraints = await prisma.stringFieldContraint.findMany()
    * ```
    */
  get stringFieldContraint(): Prisma.StringFieldContraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dateFieldContraint`: Exposes CRUD operations for the **DateFieldContraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateFieldContraints
    * const dateFieldContraints = await prisma.dateFieldContraint.findMany()
    * ```
    */
  get dateFieldContraint(): Prisma.DateFieldContraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dateTimeFieldContraint`: Exposes CRUD operations for the **DateTimeFieldContraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateTimeFieldContraints
    * const dateTimeFieldContraints = await prisma.dateTimeFieldContraint.findMany()
    * ```
    */
  get dateTimeFieldContraint(): Prisma.DateTimeFieldContraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeFieldContraint`: Exposes CRUD operations for the **TimeFieldContraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeFieldContraints
    * const timeFieldContraints = await prisma.timeFieldContraint.findMany()
    * ```
    */
  get timeFieldContraint(): Prisma.TimeFieldContraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointFieldContraint`: Exposes CRUD operations for the **PointFieldContraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointFieldContraints
    * const pointFieldContraints = await prisma.pointFieldContraint.findMany()
    * ```
    */
  get pointFieldContraint(): Prisma.PointFieldContraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lineStringFieldContraint`: Exposes CRUD operations for the **LineStringFieldContraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineStringFieldContraints
    * const lineStringFieldContraints = await prisma.lineStringFieldContraint.findMany()
    * ```
    */
  get lineStringFieldContraint(): Prisma.LineStringFieldContraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.polygonFieldContraint`: Exposes CRUD operations for the **PolygonFieldContraint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolygonFieldContraints
    * const polygonFieldContraints = await prisma.polygonFieldContraint.findMany()
    * ```
    */
  get polygonFieldContraint(): Prisma.PolygonFieldContraintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.directoryField`: Exposes CRUD operations for the **DirectoryField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectoryFields
    * const directoryFields = await prisma.directoryField.findMany()
    * ```
    */
  get directoryField(): Prisma.DirectoryFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.directory`: Exposes CRUD operations for the **Directory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directories
    * const directories = await prisma.directory.findMany()
    * ```
    */
  get directory(): Prisma.DirectoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elements`: Exposes CRUD operations for the **Elements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elements
    * const elements = await prisma.elements.findMany()
    * ```
    */
  get elements(): Prisma.ElementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layer`: Exposes CRUD operations for the **Layer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Layers
    * const layers = await prisma.layer.findMany()
    * ```
    */
  get layer(): Prisma.LayerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DirectoryFieldConstraint: 'DirectoryFieldConstraint',
    IntegerFieldConstraint: 'IntegerFieldConstraint',
    StringFieldContraint: 'StringFieldContraint',
    DateFieldContraint: 'DateFieldContraint',
    DateTimeFieldContraint: 'DateTimeFieldContraint',
    TimeFieldContraint: 'TimeFieldContraint',
    PointFieldContraint: 'PointFieldContraint',
    LineStringFieldContraint: 'LineStringFieldContraint',
    PolygonFieldContraint: 'PolygonFieldContraint',
    DirectoryField: 'DirectoryField',
    Directory: 'Directory',
    Elements: 'Elements',
    Layer: 'Layer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "directoryFieldConstraint" | "integerFieldConstraint" | "stringFieldContraint" | "dateFieldContraint" | "dateTimeFieldContraint" | "timeFieldContraint" | "pointFieldContraint" | "lineStringFieldContraint" | "polygonFieldContraint" | "directoryField" | "directory" | "elements" | "layer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DirectoryFieldConstraint: {
        payload: Prisma.$DirectoryFieldConstraintPayload<ExtArgs>
        fields: Prisma.DirectoryFieldConstraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectoryFieldConstraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectoryFieldConstraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload>
          }
          findFirst: {
            args: Prisma.DirectoryFieldConstraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectoryFieldConstraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload>
          }
          findMany: {
            args: Prisma.DirectoryFieldConstraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload>[]
          }
          create: {
            args: Prisma.DirectoryFieldConstraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload>
          }
          createMany: {
            args: Prisma.DirectoryFieldConstraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectoryFieldConstraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload>[]
          }
          delete: {
            args: Prisma.DirectoryFieldConstraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload>
          }
          update: {
            args: Prisma.DirectoryFieldConstraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload>
          }
          deleteMany: {
            args: Prisma.DirectoryFieldConstraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectoryFieldConstraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectoryFieldConstraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload>[]
          }
          upsert: {
            args: Prisma.DirectoryFieldConstraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldConstraintPayload>
          }
          aggregate: {
            args: Prisma.DirectoryFieldConstraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectoryFieldConstraint>
          }
          groupBy: {
            args: Prisma.DirectoryFieldConstraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectoryFieldConstraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectoryFieldConstraintCountArgs<ExtArgs>
            result: $Utils.Optional<DirectoryFieldConstraintCountAggregateOutputType> | number
          }
        }
      }
      IntegerFieldConstraint: {
        payload: Prisma.$IntegerFieldConstraintPayload<ExtArgs>
        fields: Prisma.IntegerFieldConstraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegerFieldConstraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegerFieldConstraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload>
          }
          findFirst: {
            args: Prisma.IntegerFieldConstraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegerFieldConstraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload>
          }
          findMany: {
            args: Prisma.IntegerFieldConstraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload>[]
          }
          create: {
            args: Prisma.IntegerFieldConstraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload>
          }
          createMany: {
            args: Prisma.IntegerFieldConstraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegerFieldConstraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload>[]
          }
          delete: {
            args: Prisma.IntegerFieldConstraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload>
          }
          update: {
            args: Prisma.IntegerFieldConstraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload>
          }
          deleteMany: {
            args: Prisma.IntegerFieldConstraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegerFieldConstraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegerFieldConstraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload>[]
          }
          upsert: {
            args: Prisma.IntegerFieldConstraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegerFieldConstraintPayload>
          }
          aggregate: {
            args: Prisma.IntegerFieldConstraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegerFieldConstraint>
          }
          groupBy: {
            args: Prisma.IntegerFieldConstraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegerFieldConstraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegerFieldConstraintCountArgs<ExtArgs>
            result: $Utils.Optional<IntegerFieldConstraintCountAggregateOutputType> | number
          }
        }
      }
      StringFieldContraint: {
        payload: Prisma.$StringFieldContraintPayload<ExtArgs>
        fields: Prisma.StringFieldContraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StringFieldContraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StringFieldContraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload>
          }
          findFirst: {
            args: Prisma.StringFieldContraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StringFieldContraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload>
          }
          findMany: {
            args: Prisma.StringFieldContraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload>[]
          }
          create: {
            args: Prisma.StringFieldContraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload>
          }
          createMany: {
            args: Prisma.StringFieldContraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StringFieldContraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload>[]
          }
          delete: {
            args: Prisma.StringFieldContraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload>
          }
          update: {
            args: Prisma.StringFieldContraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload>
          }
          deleteMany: {
            args: Prisma.StringFieldContraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StringFieldContraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StringFieldContraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload>[]
          }
          upsert: {
            args: Prisma.StringFieldContraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StringFieldContraintPayload>
          }
          aggregate: {
            args: Prisma.StringFieldContraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStringFieldContraint>
          }
          groupBy: {
            args: Prisma.StringFieldContraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<StringFieldContraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.StringFieldContraintCountArgs<ExtArgs>
            result: $Utils.Optional<StringFieldContraintCountAggregateOutputType> | number
          }
        }
      }
      DateFieldContraint: {
        payload: Prisma.$DateFieldContraintPayload<ExtArgs>
        fields: Prisma.DateFieldContraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DateFieldContraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DateFieldContraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload>
          }
          findFirst: {
            args: Prisma.DateFieldContraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DateFieldContraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload>
          }
          findMany: {
            args: Prisma.DateFieldContraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload>[]
          }
          create: {
            args: Prisma.DateFieldContraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload>
          }
          createMany: {
            args: Prisma.DateFieldContraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DateFieldContraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload>[]
          }
          delete: {
            args: Prisma.DateFieldContraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload>
          }
          update: {
            args: Prisma.DateFieldContraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload>
          }
          deleteMany: {
            args: Prisma.DateFieldContraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DateFieldContraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DateFieldContraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload>[]
          }
          upsert: {
            args: Prisma.DateFieldContraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateFieldContraintPayload>
          }
          aggregate: {
            args: Prisma.DateFieldContraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDateFieldContraint>
          }
          groupBy: {
            args: Prisma.DateFieldContraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<DateFieldContraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.DateFieldContraintCountArgs<ExtArgs>
            result: $Utils.Optional<DateFieldContraintCountAggregateOutputType> | number
          }
        }
      }
      DateTimeFieldContraint: {
        payload: Prisma.$DateTimeFieldContraintPayload<ExtArgs>
        fields: Prisma.DateTimeFieldContraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DateTimeFieldContraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DateTimeFieldContraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload>
          }
          findFirst: {
            args: Prisma.DateTimeFieldContraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DateTimeFieldContraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload>
          }
          findMany: {
            args: Prisma.DateTimeFieldContraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload>[]
          }
          create: {
            args: Prisma.DateTimeFieldContraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload>
          }
          createMany: {
            args: Prisma.DateTimeFieldContraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DateTimeFieldContraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload>[]
          }
          delete: {
            args: Prisma.DateTimeFieldContraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload>
          }
          update: {
            args: Prisma.DateTimeFieldContraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload>
          }
          deleteMany: {
            args: Prisma.DateTimeFieldContraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DateTimeFieldContraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DateTimeFieldContraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload>[]
          }
          upsert: {
            args: Prisma.DateTimeFieldContraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateTimeFieldContraintPayload>
          }
          aggregate: {
            args: Prisma.DateTimeFieldContraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDateTimeFieldContraint>
          }
          groupBy: {
            args: Prisma.DateTimeFieldContraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<DateTimeFieldContraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.DateTimeFieldContraintCountArgs<ExtArgs>
            result: $Utils.Optional<DateTimeFieldContraintCountAggregateOutputType> | number
          }
        }
      }
      TimeFieldContraint: {
        payload: Prisma.$TimeFieldContraintPayload<ExtArgs>
        fields: Prisma.TimeFieldContraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeFieldContraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeFieldContraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload>
          }
          findFirst: {
            args: Prisma.TimeFieldContraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeFieldContraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload>
          }
          findMany: {
            args: Prisma.TimeFieldContraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload>[]
          }
          create: {
            args: Prisma.TimeFieldContraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload>
          }
          createMany: {
            args: Prisma.TimeFieldContraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeFieldContraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload>[]
          }
          delete: {
            args: Prisma.TimeFieldContraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload>
          }
          update: {
            args: Prisma.TimeFieldContraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload>
          }
          deleteMany: {
            args: Prisma.TimeFieldContraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeFieldContraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeFieldContraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload>[]
          }
          upsert: {
            args: Prisma.TimeFieldContraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeFieldContraintPayload>
          }
          aggregate: {
            args: Prisma.TimeFieldContraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeFieldContraint>
          }
          groupBy: {
            args: Prisma.TimeFieldContraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeFieldContraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeFieldContraintCountArgs<ExtArgs>
            result: $Utils.Optional<TimeFieldContraintCountAggregateOutputType> | number
          }
        }
      }
      PointFieldContraint: {
        payload: Prisma.$PointFieldContraintPayload<ExtArgs>
        fields: Prisma.PointFieldContraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFieldContraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFieldContraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload>
          }
          findFirst: {
            args: Prisma.PointFieldContraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFieldContraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload>
          }
          findMany: {
            args: Prisma.PointFieldContraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload>[]
          }
          create: {
            args: Prisma.PointFieldContraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload>
          }
          createMany: {
            args: Prisma.PointFieldContraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointFieldContraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload>[]
          }
          delete: {
            args: Prisma.PointFieldContraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload>
          }
          update: {
            args: Prisma.PointFieldContraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload>
          }
          deleteMany: {
            args: Prisma.PointFieldContraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointFieldContraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointFieldContraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload>[]
          }
          upsert: {
            args: Prisma.PointFieldContraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointFieldContraintPayload>
          }
          aggregate: {
            args: Prisma.PointFieldContraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointFieldContraint>
          }
          groupBy: {
            args: Prisma.PointFieldContraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointFieldContraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointFieldContraintCountArgs<ExtArgs>
            result: $Utils.Optional<PointFieldContraintCountAggregateOutputType> | number
          }
        }
      }
      LineStringFieldContraint: {
        payload: Prisma.$LineStringFieldContraintPayload<ExtArgs>
        fields: Prisma.LineStringFieldContraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineStringFieldContraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineStringFieldContraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload>
          }
          findFirst: {
            args: Prisma.LineStringFieldContraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineStringFieldContraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload>
          }
          findMany: {
            args: Prisma.LineStringFieldContraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload>[]
          }
          create: {
            args: Prisma.LineStringFieldContraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload>
          }
          createMany: {
            args: Prisma.LineStringFieldContraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LineStringFieldContraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload>[]
          }
          delete: {
            args: Prisma.LineStringFieldContraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload>
          }
          update: {
            args: Prisma.LineStringFieldContraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload>
          }
          deleteMany: {
            args: Prisma.LineStringFieldContraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineStringFieldContraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LineStringFieldContraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload>[]
          }
          upsert: {
            args: Prisma.LineStringFieldContraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineStringFieldContraintPayload>
          }
          aggregate: {
            args: Prisma.LineStringFieldContraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLineStringFieldContraint>
          }
          groupBy: {
            args: Prisma.LineStringFieldContraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineStringFieldContraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineStringFieldContraintCountArgs<ExtArgs>
            result: $Utils.Optional<LineStringFieldContraintCountAggregateOutputType> | number
          }
        }
      }
      PolygonFieldContraint: {
        payload: Prisma.$PolygonFieldContraintPayload<ExtArgs>
        fields: Prisma.PolygonFieldContraintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolygonFieldContraintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolygonFieldContraintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload>
          }
          findFirst: {
            args: Prisma.PolygonFieldContraintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolygonFieldContraintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload>
          }
          findMany: {
            args: Prisma.PolygonFieldContraintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload>[]
          }
          create: {
            args: Prisma.PolygonFieldContraintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload>
          }
          createMany: {
            args: Prisma.PolygonFieldContraintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolygonFieldContraintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload>[]
          }
          delete: {
            args: Prisma.PolygonFieldContraintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload>
          }
          update: {
            args: Prisma.PolygonFieldContraintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload>
          }
          deleteMany: {
            args: Prisma.PolygonFieldContraintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolygonFieldContraintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolygonFieldContraintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload>[]
          }
          upsert: {
            args: Prisma.PolygonFieldContraintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolygonFieldContraintPayload>
          }
          aggregate: {
            args: Prisma.PolygonFieldContraintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolygonFieldContraint>
          }
          groupBy: {
            args: Prisma.PolygonFieldContraintGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolygonFieldContraintGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolygonFieldContraintCountArgs<ExtArgs>
            result: $Utils.Optional<PolygonFieldContraintCountAggregateOutputType> | number
          }
        }
      }
      DirectoryField: {
        payload: Prisma.$DirectoryFieldPayload<ExtArgs>
        fields: Prisma.DirectoryFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectoryFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectoryFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          findFirst: {
            args: Prisma.DirectoryFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectoryFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          findMany: {
            args: Prisma.DirectoryFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>[]
          }
          create: {
            args: Prisma.DirectoryFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          createMany: {
            args: Prisma.DirectoryFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectoryFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>[]
          }
          delete: {
            args: Prisma.DirectoryFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          update: {
            args: Prisma.DirectoryFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          deleteMany: {
            args: Prisma.DirectoryFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectoryFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectoryFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>[]
          }
          upsert: {
            args: Prisma.DirectoryFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          aggregate: {
            args: Prisma.DirectoryFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectoryField>
          }
          groupBy: {
            args: Prisma.DirectoryFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectoryFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectoryFieldCountArgs<ExtArgs>
            result: $Utils.Optional<DirectoryFieldCountAggregateOutputType> | number
          }
        }
      }
      Directory: {
        payload: Prisma.$DirectoryPayload<ExtArgs>
        fields: Prisma.DirectoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          findFirst: {
            args: Prisma.DirectoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          findMany: {
            args: Prisma.DirectoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>[]
          }
          create: {
            args: Prisma.DirectoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          createMany: {
            args: Prisma.DirectoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>[]
          }
          delete: {
            args: Prisma.DirectoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          update: {
            args: Prisma.DirectoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          deleteMany: {
            args: Prisma.DirectoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>[]
          }
          upsert: {
            args: Prisma.DirectoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          aggregate: {
            args: Prisma.DirectoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectory>
          }
          groupBy: {
            args: Prisma.DirectoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectoryCountArgs<ExtArgs>
            result: $Utils.Optional<DirectoryCountAggregateOutputType> | number
          }
        }
      }
      Elements: {
        payload: Prisma.$ElementsPayload<ExtArgs>
        fields: Prisma.ElementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload>
          }
          findFirst: {
            args: Prisma.ElementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload>
          }
          findMany: {
            args: Prisma.ElementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload>[]
          }
          create: {
            args: Prisma.ElementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload>
          }
          createMany: {
            args: Prisma.ElementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload>[]
          }
          delete: {
            args: Prisma.ElementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload>
          }
          update: {
            args: Prisma.ElementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload>
          }
          deleteMany: {
            args: Prisma.ElementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload>[]
          }
          upsert: {
            args: Prisma.ElementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElementsPayload>
          }
          aggregate: {
            args: Prisma.ElementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElements>
          }
          groupBy: {
            args: Prisma.ElementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElementsCountArgs<ExtArgs>
            result: $Utils.Optional<ElementsCountAggregateOutputType> | number
          }
        }
      }
      Layer: {
        payload: Prisma.$LayerPayload<ExtArgs>
        fields: Prisma.LayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          findFirst: {
            args: Prisma.LayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          findMany: {
            args: Prisma.LayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>[]
          }
          create: {
            args: Prisma.LayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          createMany: {
            args: Prisma.LayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>[]
          }
          delete: {
            args: Prisma.LayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          update: {
            args: Prisma.LayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          deleteMany: {
            args: Prisma.LayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>[]
          }
          upsert: {
            args: Prisma.LayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayerPayload>
          }
          aggregate: {
            args: Prisma.LayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayer>
          }
          groupBy: {
            args: Prisma.LayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayerCountArgs<ExtArgs>
            result: $Utils.Optional<LayerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    directoryFieldConstraint?: DirectoryFieldConstraintOmit
    integerFieldConstraint?: IntegerFieldConstraintOmit
    stringFieldContraint?: StringFieldContraintOmit
    dateFieldContraint?: DateFieldContraintOmit
    dateTimeFieldContraint?: DateTimeFieldContraintOmit
    timeFieldContraint?: TimeFieldContraintOmit
    pointFieldContraint?: PointFieldContraintOmit
    lineStringFieldContraint?: LineStringFieldContraintOmit
    polygonFieldContraint?: PolygonFieldContraintOmit
    directoryField?: DirectoryFieldOmit
    directory?: DirectoryOmit
    elements?: ElementsOmit
    layer?: LayerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DirectoryFieldCountOutputType
   */

  export type DirectoryFieldCountOutputType = {
    layers: number
  }

  export type DirectoryFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layers?: boolean | DirectoryFieldCountOutputTypeCountLayersArgs
  }

  // Custom InputTypes
  /**
   * DirectoryFieldCountOutputType without action
   */
  export type DirectoryFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldCountOutputType
     */
    select?: DirectoryFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectoryFieldCountOutputType without action
   */
  export type DirectoryFieldCountOutputTypeCountLayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerWhereInput
  }


  /**
   * Count Type DirectoryCountOutputType
   */

  export type DirectoryCountOutputType = {
    fields: number
    elements: number
    layers: number
  }

  export type DirectoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | DirectoryCountOutputTypeCountFieldsArgs
    elements?: boolean | DirectoryCountOutputTypeCountElementsArgs
    layers?: boolean | DirectoryCountOutputTypeCountLayersArgs
  }

  // Custom InputTypes
  /**
   * DirectoryCountOutputType without action
   */
  export type DirectoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryCountOutputType
     */
    select?: DirectoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectoryCountOutputType without action
   */
  export type DirectoryCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryFieldWhereInput
  }

  /**
   * DirectoryCountOutputType without action
   */
  export type DirectoryCountOutputTypeCountElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementsWhereInput
  }

  /**
   * DirectoryCountOutputType without action
   */
  export type DirectoryCountOutputTypeCountLayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DirectoryFieldConstraint
   */

  export type AggregateDirectoryFieldConstraint = {
    _count: DirectoryFieldConstraintCountAggregateOutputType | null
    _min: DirectoryFieldConstraintMinAggregateOutputType | null
    _max: DirectoryFieldConstraintMaxAggregateOutputType | null
  }

  export type DirectoryFieldConstraintMinAggregateOutputType = {
    id: string | null
    field_id: string | null
  }

  export type DirectoryFieldConstraintMaxAggregateOutputType = {
    id: string | null
    field_id: string | null
  }

  export type DirectoryFieldConstraintCountAggregateOutputType = {
    id: number
    field_id: number
    _all: number
  }


  export type DirectoryFieldConstraintMinAggregateInputType = {
    id?: true
    field_id?: true
  }

  export type DirectoryFieldConstraintMaxAggregateInputType = {
    id?: true
    field_id?: true
  }

  export type DirectoryFieldConstraintCountAggregateInputType = {
    id?: true
    field_id?: true
    _all?: true
  }

  export type DirectoryFieldConstraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectoryFieldConstraint to aggregate.
     */
    where?: DirectoryFieldConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFieldConstraints to fetch.
     */
    orderBy?: DirectoryFieldConstraintOrderByWithRelationInput | DirectoryFieldConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectoryFieldConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFieldConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFieldConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectoryFieldConstraints
    **/
    _count?: true | DirectoryFieldConstraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectoryFieldConstraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectoryFieldConstraintMaxAggregateInputType
  }

  export type GetDirectoryFieldConstraintAggregateType<T extends DirectoryFieldConstraintAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectoryFieldConstraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectoryFieldConstraint[P]>
      : GetScalarType<T[P], AggregateDirectoryFieldConstraint[P]>
  }




  export type DirectoryFieldConstraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryFieldConstraintWhereInput
    orderBy?: DirectoryFieldConstraintOrderByWithAggregationInput | DirectoryFieldConstraintOrderByWithAggregationInput[]
    by: DirectoryFieldConstraintScalarFieldEnum[] | DirectoryFieldConstraintScalarFieldEnum
    having?: DirectoryFieldConstraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectoryFieldConstraintCountAggregateInputType | true
    _min?: DirectoryFieldConstraintMinAggregateInputType
    _max?: DirectoryFieldConstraintMaxAggregateInputType
  }

  export type DirectoryFieldConstraintGroupByOutputType = {
    id: string
    field_id: string
    _count: DirectoryFieldConstraintCountAggregateOutputType | null
    _min: DirectoryFieldConstraintMinAggregateOutputType | null
    _max: DirectoryFieldConstraintMaxAggregateOutputType | null
  }

  type GetDirectoryFieldConstraintGroupByPayload<T extends DirectoryFieldConstraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectoryFieldConstraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectoryFieldConstraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectoryFieldConstraintGroupByOutputType[P]>
            : GetScalarType<T[P], DirectoryFieldConstraintGroupByOutputType[P]>
        }
      >
    >


  export type DirectoryFieldConstraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field_id?: boolean
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
    integer_constraint?: boolean | DirectoryFieldConstraint$integer_constraintArgs<ExtArgs>
    string_constraint?: boolean | DirectoryFieldConstraint$string_constraintArgs<ExtArgs>
    date_constraint?: boolean | DirectoryFieldConstraint$date_constraintArgs<ExtArgs>
    datetime_constraint?: boolean | DirectoryFieldConstraint$datetime_constraintArgs<ExtArgs>
    time_constraint?: boolean | DirectoryFieldConstraint$time_constraintArgs<ExtArgs>
    point_constraint?: boolean | DirectoryFieldConstraint$point_constraintArgs<ExtArgs>
    linestring_constraint?: boolean | DirectoryFieldConstraint$linestring_constraintArgs<ExtArgs>
    polygon_constraint?: boolean | DirectoryFieldConstraint$polygon_constraintArgs<ExtArgs>
  }, ExtArgs["result"]["directoryFieldConstraint"]>

  export type DirectoryFieldConstraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field_id?: boolean
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directoryFieldConstraint"]>

  export type DirectoryFieldConstraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field_id?: boolean
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directoryFieldConstraint"]>

  export type DirectoryFieldConstraintSelectScalar = {
    id?: boolean
    field_id?: boolean
  }

  export type DirectoryFieldConstraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "field_id", ExtArgs["result"]["directoryFieldConstraint"]>
  export type DirectoryFieldConstraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
    integer_constraint?: boolean | DirectoryFieldConstraint$integer_constraintArgs<ExtArgs>
    string_constraint?: boolean | DirectoryFieldConstraint$string_constraintArgs<ExtArgs>
    date_constraint?: boolean | DirectoryFieldConstraint$date_constraintArgs<ExtArgs>
    datetime_constraint?: boolean | DirectoryFieldConstraint$datetime_constraintArgs<ExtArgs>
    time_constraint?: boolean | DirectoryFieldConstraint$time_constraintArgs<ExtArgs>
    point_constraint?: boolean | DirectoryFieldConstraint$point_constraintArgs<ExtArgs>
    linestring_constraint?: boolean | DirectoryFieldConstraint$linestring_constraintArgs<ExtArgs>
    polygon_constraint?: boolean | DirectoryFieldConstraint$polygon_constraintArgs<ExtArgs>
  }
  export type DirectoryFieldConstraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }
  export type DirectoryFieldConstraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }

  export type $DirectoryFieldConstraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectoryFieldConstraint"
    objects: {
      field: Prisma.$DirectoryFieldPayload<ExtArgs>
      integer_constraint: Prisma.$IntegerFieldConstraintPayload<ExtArgs> | null
      string_constraint: Prisma.$StringFieldContraintPayload<ExtArgs> | null
      date_constraint: Prisma.$DateFieldContraintPayload<ExtArgs> | null
      datetime_constraint: Prisma.$DateTimeFieldContraintPayload<ExtArgs> | null
      time_constraint: Prisma.$TimeFieldContraintPayload<ExtArgs> | null
      point_constraint: Prisma.$PointFieldContraintPayload<ExtArgs> | null
      linestring_constraint: Prisma.$LineStringFieldContraintPayload<ExtArgs> | null
      polygon_constraint: Prisma.$PolygonFieldContraintPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      field_id: string
    }, ExtArgs["result"]["directoryFieldConstraint"]>
    composites: {}
  }

  type DirectoryFieldConstraintGetPayload<S extends boolean | null | undefined | DirectoryFieldConstraintDefaultArgs> = $Result.GetResult<Prisma.$DirectoryFieldConstraintPayload, S>

  type DirectoryFieldConstraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectoryFieldConstraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectoryFieldConstraintCountAggregateInputType | true
    }

  export interface DirectoryFieldConstraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectoryFieldConstraint'], meta: { name: 'DirectoryFieldConstraint' } }
    /**
     * Find zero or one DirectoryFieldConstraint that matches the filter.
     * @param {DirectoryFieldConstraintFindUniqueArgs} args - Arguments to find a DirectoryFieldConstraint
     * @example
     * // Get one DirectoryFieldConstraint
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectoryFieldConstraintFindUniqueArgs>(args: SelectSubset<T, DirectoryFieldConstraintFindUniqueArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DirectoryFieldConstraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectoryFieldConstraintFindUniqueOrThrowArgs} args - Arguments to find a DirectoryFieldConstraint
     * @example
     * // Get one DirectoryFieldConstraint
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectoryFieldConstraintFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectoryFieldConstraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectoryFieldConstraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldConstraintFindFirstArgs} args - Arguments to find a DirectoryFieldConstraint
     * @example
     * // Get one DirectoryFieldConstraint
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectoryFieldConstraintFindFirstArgs>(args?: SelectSubset<T, DirectoryFieldConstraintFindFirstArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectoryFieldConstraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldConstraintFindFirstOrThrowArgs} args - Arguments to find a DirectoryFieldConstraint
     * @example
     * // Get one DirectoryFieldConstraint
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectoryFieldConstraintFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectoryFieldConstraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DirectoryFieldConstraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldConstraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectoryFieldConstraints
     * const directoryFieldConstraints = await prisma.directoryFieldConstraint.findMany()
     * 
     * // Get first 10 DirectoryFieldConstraints
     * const directoryFieldConstraints = await prisma.directoryFieldConstraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directoryFieldConstraintWithIdOnly = await prisma.directoryFieldConstraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectoryFieldConstraintFindManyArgs>(args?: SelectSubset<T, DirectoryFieldConstraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DirectoryFieldConstraint.
     * @param {DirectoryFieldConstraintCreateArgs} args - Arguments to create a DirectoryFieldConstraint.
     * @example
     * // Create one DirectoryFieldConstraint
     * const DirectoryFieldConstraint = await prisma.directoryFieldConstraint.create({
     *   data: {
     *     // ... data to create a DirectoryFieldConstraint
     *   }
     * })
     * 
     */
    create<T extends DirectoryFieldConstraintCreateArgs>(args: SelectSubset<T, DirectoryFieldConstraintCreateArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DirectoryFieldConstraints.
     * @param {DirectoryFieldConstraintCreateManyArgs} args - Arguments to create many DirectoryFieldConstraints.
     * @example
     * // Create many DirectoryFieldConstraints
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectoryFieldConstraintCreateManyArgs>(args?: SelectSubset<T, DirectoryFieldConstraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DirectoryFieldConstraints and returns the data saved in the database.
     * @param {DirectoryFieldConstraintCreateManyAndReturnArgs} args - Arguments to create many DirectoryFieldConstraints.
     * @example
     * // Create many DirectoryFieldConstraints
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DirectoryFieldConstraints and only return the `id`
     * const directoryFieldConstraintWithIdOnly = await prisma.directoryFieldConstraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectoryFieldConstraintCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectoryFieldConstraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DirectoryFieldConstraint.
     * @param {DirectoryFieldConstraintDeleteArgs} args - Arguments to delete one DirectoryFieldConstraint.
     * @example
     * // Delete one DirectoryFieldConstraint
     * const DirectoryFieldConstraint = await prisma.directoryFieldConstraint.delete({
     *   where: {
     *     // ... filter to delete one DirectoryFieldConstraint
     *   }
     * })
     * 
     */
    delete<T extends DirectoryFieldConstraintDeleteArgs>(args: SelectSubset<T, DirectoryFieldConstraintDeleteArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DirectoryFieldConstraint.
     * @param {DirectoryFieldConstraintUpdateArgs} args - Arguments to update one DirectoryFieldConstraint.
     * @example
     * // Update one DirectoryFieldConstraint
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectoryFieldConstraintUpdateArgs>(args: SelectSubset<T, DirectoryFieldConstraintUpdateArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DirectoryFieldConstraints.
     * @param {DirectoryFieldConstraintDeleteManyArgs} args - Arguments to filter DirectoryFieldConstraints to delete.
     * @example
     * // Delete a few DirectoryFieldConstraints
     * const { count } = await prisma.directoryFieldConstraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectoryFieldConstraintDeleteManyArgs>(args?: SelectSubset<T, DirectoryFieldConstraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectoryFieldConstraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldConstraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectoryFieldConstraints
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectoryFieldConstraintUpdateManyArgs>(args: SelectSubset<T, DirectoryFieldConstraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectoryFieldConstraints and returns the data updated in the database.
     * @param {DirectoryFieldConstraintUpdateManyAndReturnArgs} args - Arguments to update many DirectoryFieldConstraints.
     * @example
     * // Update many DirectoryFieldConstraints
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DirectoryFieldConstraints and only return the `id`
     * const directoryFieldConstraintWithIdOnly = await prisma.directoryFieldConstraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DirectoryFieldConstraintUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectoryFieldConstraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DirectoryFieldConstraint.
     * @param {DirectoryFieldConstraintUpsertArgs} args - Arguments to update or create a DirectoryFieldConstraint.
     * @example
     * // Update or create a DirectoryFieldConstraint
     * const directoryFieldConstraint = await prisma.directoryFieldConstraint.upsert({
     *   create: {
     *     // ... data to create a DirectoryFieldConstraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectoryFieldConstraint we want to update
     *   }
     * })
     */
    upsert<T extends DirectoryFieldConstraintUpsertArgs>(args: SelectSubset<T, DirectoryFieldConstraintUpsertArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DirectoryFieldConstraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldConstraintCountArgs} args - Arguments to filter DirectoryFieldConstraints to count.
     * @example
     * // Count the number of DirectoryFieldConstraints
     * const count = await prisma.directoryFieldConstraint.count({
     *   where: {
     *     // ... the filter for the DirectoryFieldConstraints we want to count
     *   }
     * })
    **/
    count<T extends DirectoryFieldConstraintCountArgs>(
      args?: Subset<T, DirectoryFieldConstraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectoryFieldConstraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectoryFieldConstraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldConstraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectoryFieldConstraintAggregateArgs>(args: Subset<T, DirectoryFieldConstraintAggregateArgs>): Prisma.PrismaPromise<GetDirectoryFieldConstraintAggregateType<T>>

    /**
     * Group by DirectoryFieldConstraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldConstraintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectoryFieldConstraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectoryFieldConstraintGroupByArgs['orderBy'] }
        : { orderBy?: DirectoryFieldConstraintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectoryFieldConstraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectoryFieldConstraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DirectoryFieldConstraint model
   */
  readonly fields: DirectoryFieldConstraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectoryFieldConstraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectoryFieldConstraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends DirectoryFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    integer_constraint<T extends DirectoryFieldConstraint$integer_constraintArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraint$integer_constraintArgs<ExtArgs>>): Prisma__IntegerFieldConstraintClient<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    string_constraint<T extends DirectoryFieldConstraint$string_constraintArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraint$string_constraintArgs<ExtArgs>>): Prisma__StringFieldContraintClient<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    date_constraint<T extends DirectoryFieldConstraint$date_constraintArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraint$date_constraintArgs<ExtArgs>>): Prisma__DateFieldContraintClient<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    datetime_constraint<T extends DirectoryFieldConstraint$datetime_constraintArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraint$datetime_constraintArgs<ExtArgs>>): Prisma__DateTimeFieldContraintClient<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    time_constraint<T extends DirectoryFieldConstraint$time_constraintArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraint$time_constraintArgs<ExtArgs>>): Prisma__TimeFieldContraintClient<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    point_constraint<T extends DirectoryFieldConstraint$point_constraintArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraint$point_constraintArgs<ExtArgs>>): Prisma__PointFieldContraintClient<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    linestring_constraint<T extends DirectoryFieldConstraint$linestring_constraintArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraint$linestring_constraintArgs<ExtArgs>>): Prisma__LineStringFieldContraintClient<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    polygon_constraint<T extends DirectoryFieldConstraint$polygon_constraintArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraint$polygon_constraintArgs<ExtArgs>>): Prisma__PolygonFieldContraintClient<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DirectoryFieldConstraint model
   */
  interface DirectoryFieldConstraintFieldRefs {
    readonly id: FieldRef<"DirectoryFieldConstraint", 'String'>
    readonly field_id: FieldRef<"DirectoryFieldConstraint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DirectoryFieldConstraint findUnique
   */
  export type DirectoryFieldConstraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryFieldConstraint to fetch.
     */
    where: DirectoryFieldConstraintWhereUniqueInput
  }

  /**
   * DirectoryFieldConstraint findUniqueOrThrow
   */
  export type DirectoryFieldConstraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryFieldConstraint to fetch.
     */
    where: DirectoryFieldConstraintWhereUniqueInput
  }

  /**
   * DirectoryFieldConstraint findFirst
   */
  export type DirectoryFieldConstraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryFieldConstraint to fetch.
     */
    where?: DirectoryFieldConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFieldConstraints to fetch.
     */
    orderBy?: DirectoryFieldConstraintOrderByWithRelationInput | DirectoryFieldConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectoryFieldConstraints.
     */
    cursor?: DirectoryFieldConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFieldConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFieldConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectoryFieldConstraints.
     */
    distinct?: DirectoryFieldConstraintScalarFieldEnum | DirectoryFieldConstraintScalarFieldEnum[]
  }

  /**
   * DirectoryFieldConstraint findFirstOrThrow
   */
  export type DirectoryFieldConstraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryFieldConstraint to fetch.
     */
    where?: DirectoryFieldConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFieldConstraints to fetch.
     */
    orderBy?: DirectoryFieldConstraintOrderByWithRelationInput | DirectoryFieldConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectoryFieldConstraints.
     */
    cursor?: DirectoryFieldConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFieldConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFieldConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectoryFieldConstraints.
     */
    distinct?: DirectoryFieldConstraintScalarFieldEnum | DirectoryFieldConstraintScalarFieldEnum[]
  }

  /**
   * DirectoryFieldConstraint findMany
   */
  export type DirectoryFieldConstraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryFieldConstraints to fetch.
     */
    where?: DirectoryFieldConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFieldConstraints to fetch.
     */
    orderBy?: DirectoryFieldConstraintOrderByWithRelationInput | DirectoryFieldConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectoryFieldConstraints.
     */
    cursor?: DirectoryFieldConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFieldConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFieldConstraints.
     */
    skip?: number
    distinct?: DirectoryFieldConstraintScalarFieldEnum | DirectoryFieldConstraintScalarFieldEnum[]
  }

  /**
   * DirectoryFieldConstraint create
   */
  export type DirectoryFieldConstraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectoryFieldConstraint.
     */
    data: XOR<DirectoryFieldConstraintCreateInput, DirectoryFieldConstraintUncheckedCreateInput>
  }

  /**
   * DirectoryFieldConstraint createMany
   */
  export type DirectoryFieldConstraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectoryFieldConstraints.
     */
    data: DirectoryFieldConstraintCreateManyInput | DirectoryFieldConstraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DirectoryFieldConstraint createManyAndReturn
   */
  export type DirectoryFieldConstraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * The data used to create many DirectoryFieldConstraints.
     */
    data: DirectoryFieldConstraintCreateManyInput | DirectoryFieldConstraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectoryFieldConstraint update
   */
  export type DirectoryFieldConstraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectoryFieldConstraint.
     */
    data: XOR<DirectoryFieldConstraintUpdateInput, DirectoryFieldConstraintUncheckedUpdateInput>
    /**
     * Choose, which DirectoryFieldConstraint to update.
     */
    where: DirectoryFieldConstraintWhereUniqueInput
  }

  /**
   * DirectoryFieldConstraint updateMany
   */
  export type DirectoryFieldConstraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectoryFieldConstraints.
     */
    data: XOR<DirectoryFieldConstraintUpdateManyMutationInput, DirectoryFieldConstraintUncheckedUpdateManyInput>
    /**
     * Filter which DirectoryFieldConstraints to update
     */
    where?: DirectoryFieldConstraintWhereInput
    /**
     * Limit how many DirectoryFieldConstraints to update.
     */
    limit?: number
  }

  /**
   * DirectoryFieldConstraint updateManyAndReturn
   */
  export type DirectoryFieldConstraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * The data used to update DirectoryFieldConstraints.
     */
    data: XOR<DirectoryFieldConstraintUpdateManyMutationInput, DirectoryFieldConstraintUncheckedUpdateManyInput>
    /**
     * Filter which DirectoryFieldConstraints to update
     */
    where?: DirectoryFieldConstraintWhereInput
    /**
     * Limit how many DirectoryFieldConstraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectoryFieldConstraint upsert
   */
  export type DirectoryFieldConstraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectoryFieldConstraint to update in case it exists.
     */
    where: DirectoryFieldConstraintWhereUniqueInput
    /**
     * In case the DirectoryFieldConstraint found by the `where` argument doesn't exist, create a new DirectoryFieldConstraint with this data.
     */
    create: XOR<DirectoryFieldConstraintCreateInput, DirectoryFieldConstraintUncheckedCreateInput>
    /**
     * In case the DirectoryFieldConstraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectoryFieldConstraintUpdateInput, DirectoryFieldConstraintUncheckedUpdateInput>
  }

  /**
   * DirectoryFieldConstraint delete
   */
  export type DirectoryFieldConstraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter which DirectoryFieldConstraint to delete.
     */
    where: DirectoryFieldConstraintWhereUniqueInput
  }

  /**
   * DirectoryFieldConstraint deleteMany
   */
  export type DirectoryFieldConstraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectoryFieldConstraints to delete
     */
    where?: DirectoryFieldConstraintWhereInput
    /**
     * Limit how many DirectoryFieldConstraints to delete.
     */
    limit?: number
  }

  /**
   * DirectoryFieldConstraint.integer_constraint
   */
  export type DirectoryFieldConstraint$integer_constraintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    where?: IntegerFieldConstraintWhereInput
  }

  /**
   * DirectoryFieldConstraint.string_constraint
   */
  export type DirectoryFieldConstraint$string_constraintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    where?: StringFieldContraintWhereInput
  }

  /**
   * DirectoryFieldConstraint.date_constraint
   */
  export type DirectoryFieldConstraint$date_constraintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    where?: DateFieldContraintWhereInput
  }

  /**
   * DirectoryFieldConstraint.datetime_constraint
   */
  export type DirectoryFieldConstraint$datetime_constraintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    where?: DateTimeFieldContraintWhereInput
  }

  /**
   * DirectoryFieldConstraint.time_constraint
   */
  export type DirectoryFieldConstraint$time_constraintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    where?: TimeFieldContraintWhereInput
  }

  /**
   * DirectoryFieldConstraint.point_constraint
   */
  export type DirectoryFieldConstraint$point_constraintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    where?: PointFieldContraintWhereInput
  }

  /**
   * DirectoryFieldConstraint.linestring_constraint
   */
  export type DirectoryFieldConstraint$linestring_constraintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    where?: LineStringFieldContraintWhereInput
  }

  /**
   * DirectoryFieldConstraint.polygon_constraint
   */
  export type DirectoryFieldConstraint$polygon_constraintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    where?: PolygonFieldContraintWhereInput
  }

  /**
   * DirectoryFieldConstraint without action
   */
  export type DirectoryFieldConstraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
  }


  /**
   * Model IntegerFieldConstraint
   */

  export type AggregateIntegerFieldConstraint = {
    _count: IntegerFieldConstraintCountAggregateOutputType | null
    _avg: IntegerFieldConstraintAvgAggregateOutputType | null
    _sum: IntegerFieldConstraintSumAggregateOutputType | null
    _min: IntegerFieldConstraintMinAggregateOutputType | null
    _max: IntegerFieldConstraintMaxAggregateOutputType | null
  }

  export type IntegerFieldConstraintAvgAggregateOutputType = {
    min_value: number | null
    max_value: number | null
    default_value: number | null
  }

  export type IntegerFieldConstraintSumAggregateOutputType = {
    min_value: number | null
    max_value: number | null
    default_value: number | null
  }

  export type IntegerFieldConstraintMinAggregateOutputType = {
    id: string | null
    min_value: number | null
    max_value: number | null
    default_value: number | null
    constraint_id: string | null
  }

  export type IntegerFieldConstraintMaxAggregateOutputType = {
    id: string | null
    min_value: number | null
    max_value: number | null
    default_value: number | null
    constraint_id: string | null
  }

  export type IntegerFieldConstraintCountAggregateOutputType = {
    id: number
    min_value: number
    max_value: number
    default_value: number
    constraint_id: number
    _all: number
  }


  export type IntegerFieldConstraintAvgAggregateInputType = {
    min_value?: true
    max_value?: true
    default_value?: true
  }

  export type IntegerFieldConstraintSumAggregateInputType = {
    min_value?: true
    max_value?: true
    default_value?: true
  }

  export type IntegerFieldConstraintMinAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
  }

  export type IntegerFieldConstraintMaxAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
  }

  export type IntegerFieldConstraintCountAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
    _all?: true
  }

  export type IntegerFieldConstraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegerFieldConstraint to aggregate.
     */
    where?: IntegerFieldConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegerFieldConstraints to fetch.
     */
    orderBy?: IntegerFieldConstraintOrderByWithRelationInput | IntegerFieldConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegerFieldConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegerFieldConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegerFieldConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntegerFieldConstraints
    **/
    _count?: true | IntegerFieldConstraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntegerFieldConstraintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntegerFieldConstraintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegerFieldConstraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegerFieldConstraintMaxAggregateInputType
  }

  export type GetIntegerFieldConstraintAggregateType<T extends IntegerFieldConstraintAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegerFieldConstraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegerFieldConstraint[P]>
      : GetScalarType<T[P], AggregateIntegerFieldConstraint[P]>
  }




  export type IntegerFieldConstraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegerFieldConstraintWhereInput
    orderBy?: IntegerFieldConstraintOrderByWithAggregationInput | IntegerFieldConstraintOrderByWithAggregationInput[]
    by: IntegerFieldConstraintScalarFieldEnum[] | IntegerFieldConstraintScalarFieldEnum
    having?: IntegerFieldConstraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegerFieldConstraintCountAggregateInputType | true
    _avg?: IntegerFieldConstraintAvgAggregateInputType
    _sum?: IntegerFieldConstraintSumAggregateInputType
    _min?: IntegerFieldConstraintMinAggregateInputType
    _max?: IntegerFieldConstraintMaxAggregateInputType
  }

  export type IntegerFieldConstraintGroupByOutputType = {
    id: string
    min_value: number | null
    max_value: number | null
    default_value: number | null
    constraint_id: string
    _count: IntegerFieldConstraintCountAggregateOutputType | null
    _avg: IntegerFieldConstraintAvgAggregateOutputType | null
    _sum: IntegerFieldConstraintSumAggregateOutputType | null
    _min: IntegerFieldConstraintMinAggregateOutputType | null
    _max: IntegerFieldConstraintMaxAggregateOutputType | null
  }

  type GetIntegerFieldConstraintGroupByPayload<T extends IntegerFieldConstraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegerFieldConstraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegerFieldConstraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegerFieldConstraintGroupByOutputType[P]>
            : GetScalarType<T[P], IntegerFieldConstraintGroupByOutputType[P]>
        }
      >
    >


  export type IntegerFieldConstraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integerFieldConstraint"]>

  export type IntegerFieldConstraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integerFieldConstraint"]>

  export type IntegerFieldConstraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integerFieldConstraint"]>

  export type IntegerFieldConstraintSelectScalar = {
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
  }

  export type IntegerFieldConstraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "min_value" | "max_value" | "default_value" | "constraint_id", ExtArgs["result"]["integerFieldConstraint"]>
  export type IntegerFieldConstraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type IntegerFieldConstraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type IntegerFieldConstraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }

  export type $IntegerFieldConstraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntegerFieldConstraint"
    objects: {
      constraint: Prisma.$DirectoryFieldConstraintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      min_value: number | null
      max_value: number | null
      default_value: number | null
      constraint_id: string
    }, ExtArgs["result"]["integerFieldConstraint"]>
    composites: {}
  }

  type IntegerFieldConstraintGetPayload<S extends boolean | null | undefined | IntegerFieldConstraintDefaultArgs> = $Result.GetResult<Prisma.$IntegerFieldConstraintPayload, S>

  type IntegerFieldConstraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegerFieldConstraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegerFieldConstraintCountAggregateInputType | true
    }

  export interface IntegerFieldConstraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntegerFieldConstraint'], meta: { name: 'IntegerFieldConstraint' } }
    /**
     * Find zero or one IntegerFieldConstraint that matches the filter.
     * @param {IntegerFieldConstraintFindUniqueArgs} args - Arguments to find a IntegerFieldConstraint
     * @example
     * // Get one IntegerFieldConstraint
     * const integerFieldConstraint = await prisma.integerFieldConstraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegerFieldConstraintFindUniqueArgs>(args: SelectSubset<T, IntegerFieldConstraintFindUniqueArgs<ExtArgs>>): Prisma__IntegerFieldConstraintClient<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntegerFieldConstraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegerFieldConstraintFindUniqueOrThrowArgs} args - Arguments to find a IntegerFieldConstraint
     * @example
     * // Get one IntegerFieldConstraint
     * const integerFieldConstraint = await prisma.integerFieldConstraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegerFieldConstraintFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegerFieldConstraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegerFieldConstraintClient<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegerFieldConstraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegerFieldConstraintFindFirstArgs} args - Arguments to find a IntegerFieldConstraint
     * @example
     * // Get one IntegerFieldConstraint
     * const integerFieldConstraint = await prisma.integerFieldConstraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegerFieldConstraintFindFirstArgs>(args?: SelectSubset<T, IntegerFieldConstraintFindFirstArgs<ExtArgs>>): Prisma__IntegerFieldConstraintClient<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegerFieldConstraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegerFieldConstraintFindFirstOrThrowArgs} args - Arguments to find a IntegerFieldConstraint
     * @example
     * // Get one IntegerFieldConstraint
     * const integerFieldConstraint = await prisma.integerFieldConstraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegerFieldConstraintFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegerFieldConstraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegerFieldConstraintClient<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntegerFieldConstraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegerFieldConstraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntegerFieldConstraints
     * const integerFieldConstraints = await prisma.integerFieldConstraint.findMany()
     * 
     * // Get first 10 IntegerFieldConstraints
     * const integerFieldConstraints = await prisma.integerFieldConstraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integerFieldConstraintWithIdOnly = await prisma.integerFieldConstraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegerFieldConstraintFindManyArgs>(args?: SelectSubset<T, IntegerFieldConstraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntegerFieldConstraint.
     * @param {IntegerFieldConstraintCreateArgs} args - Arguments to create a IntegerFieldConstraint.
     * @example
     * // Create one IntegerFieldConstraint
     * const IntegerFieldConstraint = await prisma.integerFieldConstraint.create({
     *   data: {
     *     // ... data to create a IntegerFieldConstraint
     *   }
     * })
     * 
     */
    create<T extends IntegerFieldConstraintCreateArgs>(args: SelectSubset<T, IntegerFieldConstraintCreateArgs<ExtArgs>>): Prisma__IntegerFieldConstraintClient<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntegerFieldConstraints.
     * @param {IntegerFieldConstraintCreateManyArgs} args - Arguments to create many IntegerFieldConstraints.
     * @example
     * // Create many IntegerFieldConstraints
     * const integerFieldConstraint = await prisma.integerFieldConstraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegerFieldConstraintCreateManyArgs>(args?: SelectSubset<T, IntegerFieldConstraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntegerFieldConstraints and returns the data saved in the database.
     * @param {IntegerFieldConstraintCreateManyAndReturnArgs} args - Arguments to create many IntegerFieldConstraints.
     * @example
     * // Create many IntegerFieldConstraints
     * const integerFieldConstraint = await prisma.integerFieldConstraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntegerFieldConstraints and only return the `id`
     * const integerFieldConstraintWithIdOnly = await prisma.integerFieldConstraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegerFieldConstraintCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegerFieldConstraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntegerFieldConstraint.
     * @param {IntegerFieldConstraintDeleteArgs} args - Arguments to delete one IntegerFieldConstraint.
     * @example
     * // Delete one IntegerFieldConstraint
     * const IntegerFieldConstraint = await prisma.integerFieldConstraint.delete({
     *   where: {
     *     // ... filter to delete one IntegerFieldConstraint
     *   }
     * })
     * 
     */
    delete<T extends IntegerFieldConstraintDeleteArgs>(args: SelectSubset<T, IntegerFieldConstraintDeleteArgs<ExtArgs>>): Prisma__IntegerFieldConstraintClient<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntegerFieldConstraint.
     * @param {IntegerFieldConstraintUpdateArgs} args - Arguments to update one IntegerFieldConstraint.
     * @example
     * // Update one IntegerFieldConstraint
     * const integerFieldConstraint = await prisma.integerFieldConstraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegerFieldConstraintUpdateArgs>(args: SelectSubset<T, IntegerFieldConstraintUpdateArgs<ExtArgs>>): Prisma__IntegerFieldConstraintClient<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntegerFieldConstraints.
     * @param {IntegerFieldConstraintDeleteManyArgs} args - Arguments to filter IntegerFieldConstraints to delete.
     * @example
     * // Delete a few IntegerFieldConstraints
     * const { count } = await prisma.integerFieldConstraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegerFieldConstraintDeleteManyArgs>(args?: SelectSubset<T, IntegerFieldConstraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegerFieldConstraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegerFieldConstraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntegerFieldConstraints
     * const integerFieldConstraint = await prisma.integerFieldConstraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegerFieldConstraintUpdateManyArgs>(args: SelectSubset<T, IntegerFieldConstraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegerFieldConstraints and returns the data updated in the database.
     * @param {IntegerFieldConstraintUpdateManyAndReturnArgs} args - Arguments to update many IntegerFieldConstraints.
     * @example
     * // Update many IntegerFieldConstraints
     * const integerFieldConstraint = await prisma.integerFieldConstraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntegerFieldConstraints and only return the `id`
     * const integerFieldConstraintWithIdOnly = await prisma.integerFieldConstraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntegerFieldConstraintUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegerFieldConstraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntegerFieldConstraint.
     * @param {IntegerFieldConstraintUpsertArgs} args - Arguments to update or create a IntegerFieldConstraint.
     * @example
     * // Update or create a IntegerFieldConstraint
     * const integerFieldConstraint = await prisma.integerFieldConstraint.upsert({
     *   create: {
     *     // ... data to create a IntegerFieldConstraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntegerFieldConstraint we want to update
     *   }
     * })
     */
    upsert<T extends IntegerFieldConstraintUpsertArgs>(args: SelectSubset<T, IntegerFieldConstraintUpsertArgs<ExtArgs>>): Prisma__IntegerFieldConstraintClient<$Result.GetResult<Prisma.$IntegerFieldConstraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntegerFieldConstraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegerFieldConstraintCountArgs} args - Arguments to filter IntegerFieldConstraints to count.
     * @example
     * // Count the number of IntegerFieldConstraints
     * const count = await prisma.integerFieldConstraint.count({
     *   where: {
     *     // ... the filter for the IntegerFieldConstraints we want to count
     *   }
     * })
    **/
    count<T extends IntegerFieldConstraintCountArgs>(
      args?: Subset<T, IntegerFieldConstraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegerFieldConstraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntegerFieldConstraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegerFieldConstraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntegerFieldConstraintAggregateArgs>(args: Subset<T, IntegerFieldConstraintAggregateArgs>): Prisma.PrismaPromise<GetIntegerFieldConstraintAggregateType<T>>

    /**
     * Group by IntegerFieldConstraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegerFieldConstraintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntegerFieldConstraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegerFieldConstraintGroupByArgs['orderBy'] }
        : { orderBy?: IntegerFieldConstraintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntegerFieldConstraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegerFieldConstraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntegerFieldConstraint model
   */
  readonly fields: IntegerFieldConstraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntegerFieldConstraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegerFieldConstraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constraint<T extends DirectoryFieldConstraintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraintDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IntegerFieldConstraint model
   */
  interface IntegerFieldConstraintFieldRefs {
    readonly id: FieldRef<"IntegerFieldConstraint", 'String'>
    readonly min_value: FieldRef<"IntegerFieldConstraint", 'Int'>
    readonly max_value: FieldRef<"IntegerFieldConstraint", 'Int'>
    readonly default_value: FieldRef<"IntegerFieldConstraint", 'Int'>
    readonly constraint_id: FieldRef<"IntegerFieldConstraint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IntegerFieldConstraint findUnique
   */
  export type IntegerFieldConstraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which IntegerFieldConstraint to fetch.
     */
    where: IntegerFieldConstraintWhereUniqueInput
  }

  /**
   * IntegerFieldConstraint findUniqueOrThrow
   */
  export type IntegerFieldConstraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which IntegerFieldConstraint to fetch.
     */
    where: IntegerFieldConstraintWhereUniqueInput
  }

  /**
   * IntegerFieldConstraint findFirst
   */
  export type IntegerFieldConstraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which IntegerFieldConstraint to fetch.
     */
    where?: IntegerFieldConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegerFieldConstraints to fetch.
     */
    orderBy?: IntegerFieldConstraintOrderByWithRelationInput | IntegerFieldConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegerFieldConstraints.
     */
    cursor?: IntegerFieldConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegerFieldConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegerFieldConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegerFieldConstraints.
     */
    distinct?: IntegerFieldConstraintScalarFieldEnum | IntegerFieldConstraintScalarFieldEnum[]
  }

  /**
   * IntegerFieldConstraint findFirstOrThrow
   */
  export type IntegerFieldConstraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which IntegerFieldConstraint to fetch.
     */
    where?: IntegerFieldConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegerFieldConstraints to fetch.
     */
    orderBy?: IntegerFieldConstraintOrderByWithRelationInput | IntegerFieldConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegerFieldConstraints.
     */
    cursor?: IntegerFieldConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegerFieldConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegerFieldConstraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegerFieldConstraints.
     */
    distinct?: IntegerFieldConstraintScalarFieldEnum | IntegerFieldConstraintScalarFieldEnum[]
  }

  /**
   * IntegerFieldConstraint findMany
   */
  export type IntegerFieldConstraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter, which IntegerFieldConstraints to fetch.
     */
    where?: IntegerFieldConstraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegerFieldConstraints to fetch.
     */
    orderBy?: IntegerFieldConstraintOrderByWithRelationInput | IntegerFieldConstraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntegerFieldConstraints.
     */
    cursor?: IntegerFieldConstraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegerFieldConstraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegerFieldConstraints.
     */
    skip?: number
    distinct?: IntegerFieldConstraintScalarFieldEnum | IntegerFieldConstraintScalarFieldEnum[]
  }

  /**
   * IntegerFieldConstraint create
   */
  export type IntegerFieldConstraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    /**
     * The data needed to create a IntegerFieldConstraint.
     */
    data: XOR<IntegerFieldConstraintCreateInput, IntegerFieldConstraintUncheckedCreateInput>
  }

  /**
   * IntegerFieldConstraint createMany
   */
  export type IntegerFieldConstraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntegerFieldConstraints.
     */
    data: IntegerFieldConstraintCreateManyInput | IntegerFieldConstraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegerFieldConstraint createManyAndReturn
   */
  export type IntegerFieldConstraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * The data used to create many IntegerFieldConstraints.
     */
    data: IntegerFieldConstraintCreateManyInput | IntegerFieldConstraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntegerFieldConstraint update
   */
  export type IntegerFieldConstraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    /**
     * The data needed to update a IntegerFieldConstraint.
     */
    data: XOR<IntegerFieldConstraintUpdateInput, IntegerFieldConstraintUncheckedUpdateInput>
    /**
     * Choose, which IntegerFieldConstraint to update.
     */
    where: IntegerFieldConstraintWhereUniqueInput
  }

  /**
   * IntegerFieldConstraint updateMany
   */
  export type IntegerFieldConstraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntegerFieldConstraints.
     */
    data: XOR<IntegerFieldConstraintUpdateManyMutationInput, IntegerFieldConstraintUncheckedUpdateManyInput>
    /**
     * Filter which IntegerFieldConstraints to update
     */
    where?: IntegerFieldConstraintWhereInput
    /**
     * Limit how many IntegerFieldConstraints to update.
     */
    limit?: number
  }

  /**
   * IntegerFieldConstraint updateManyAndReturn
   */
  export type IntegerFieldConstraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * The data used to update IntegerFieldConstraints.
     */
    data: XOR<IntegerFieldConstraintUpdateManyMutationInput, IntegerFieldConstraintUncheckedUpdateManyInput>
    /**
     * Filter which IntegerFieldConstraints to update
     */
    where?: IntegerFieldConstraintWhereInput
    /**
     * Limit how many IntegerFieldConstraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntegerFieldConstraint upsert
   */
  export type IntegerFieldConstraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    /**
     * The filter to search for the IntegerFieldConstraint to update in case it exists.
     */
    where: IntegerFieldConstraintWhereUniqueInput
    /**
     * In case the IntegerFieldConstraint found by the `where` argument doesn't exist, create a new IntegerFieldConstraint with this data.
     */
    create: XOR<IntegerFieldConstraintCreateInput, IntegerFieldConstraintUncheckedCreateInput>
    /**
     * In case the IntegerFieldConstraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegerFieldConstraintUpdateInput, IntegerFieldConstraintUncheckedUpdateInput>
  }

  /**
   * IntegerFieldConstraint delete
   */
  export type IntegerFieldConstraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
    /**
     * Filter which IntegerFieldConstraint to delete.
     */
    where: IntegerFieldConstraintWhereUniqueInput
  }

  /**
   * IntegerFieldConstraint deleteMany
   */
  export type IntegerFieldConstraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegerFieldConstraints to delete
     */
    where?: IntegerFieldConstraintWhereInput
    /**
     * Limit how many IntegerFieldConstraints to delete.
     */
    limit?: number
  }

  /**
   * IntegerFieldConstraint without action
   */
  export type IntegerFieldConstraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegerFieldConstraint
     */
    select?: IntegerFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegerFieldConstraint
     */
    omit?: IntegerFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegerFieldConstraintInclude<ExtArgs> | null
  }


  /**
   * Model StringFieldContraint
   */

  export type AggregateStringFieldContraint = {
    _count: StringFieldContraintCountAggregateOutputType | null
    _avg: StringFieldContraintAvgAggregateOutputType | null
    _sum: StringFieldContraintSumAggregateOutputType | null
    _min: StringFieldContraintMinAggregateOutputType | null
    _max: StringFieldContraintMaxAggregateOutputType | null
  }

  export type StringFieldContraintAvgAggregateOutputType = {
    min_length: number | null
    max_length: number | null
  }

  export type StringFieldContraintSumAggregateOutputType = {
    min_length: number | null
    max_length: number | null
  }

  export type StringFieldContraintMinAggregateOutputType = {
    id: string | null
    min_length: number | null
    max_length: number | null
    default_value: string | null
    constraint_id: string | null
  }

  export type StringFieldContraintMaxAggregateOutputType = {
    id: string | null
    min_length: number | null
    max_length: number | null
    default_value: string | null
    constraint_id: string | null
  }

  export type StringFieldContraintCountAggregateOutputType = {
    id: number
    min_length: number
    max_length: number
    default_value: number
    constraint_id: number
    _all: number
  }


  export type StringFieldContraintAvgAggregateInputType = {
    min_length?: true
    max_length?: true
  }

  export type StringFieldContraintSumAggregateInputType = {
    min_length?: true
    max_length?: true
  }

  export type StringFieldContraintMinAggregateInputType = {
    id?: true
    min_length?: true
    max_length?: true
    default_value?: true
    constraint_id?: true
  }

  export type StringFieldContraintMaxAggregateInputType = {
    id?: true
    min_length?: true
    max_length?: true
    default_value?: true
    constraint_id?: true
  }

  export type StringFieldContraintCountAggregateInputType = {
    id?: true
    min_length?: true
    max_length?: true
    default_value?: true
    constraint_id?: true
    _all?: true
  }

  export type StringFieldContraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StringFieldContraint to aggregate.
     */
    where?: StringFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StringFieldContraints to fetch.
     */
    orderBy?: StringFieldContraintOrderByWithRelationInput | StringFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StringFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StringFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StringFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StringFieldContraints
    **/
    _count?: true | StringFieldContraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StringFieldContraintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StringFieldContraintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StringFieldContraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StringFieldContraintMaxAggregateInputType
  }

  export type GetStringFieldContraintAggregateType<T extends StringFieldContraintAggregateArgs> = {
        [P in keyof T & keyof AggregateStringFieldContraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStringFieldContraint[P]>
      : GetScalarType<T[P], AggregateStringFieldContraint[P]>
  }




  export type StringFieldContraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StringFieldContraintWhereInput
    orderBy?: StringFieldContraintOrderByWithAggregationInput | StringFieldContraintOrderByWithAggregationInput[]
    by: StringFieldContraintScalarFieldEnum[] | StringFieldContraintScalarFieldEnum
    having?: StringFieldContraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StringFieldContraintCountAggregateInputType | true
    _avg?: StringFieldContraintAvgAggregateInputType
    _sum?: StringFieldContraintSumAggregateInputType
    _min?: StringFieldContraintMinAggregateInputType
    _max?: StringFieldContraintMaxAggregateInputType
  }

  export type StringFieldContraintGroupByOutputType = {
    id: string
    min_length: number | null
    max_length: number | null
    default_value: string | null
    constraint_id: string
    _count: StringFieldContraintCountAggregateOutputType | null
    _avg: StringFieldContraintAvgAggregateOutputType | null
    _sum: StringFieldContraintSumAggregateOutputType | null
    _min: StringFieldContraintMinAggregateOutputType | null
    _max: StringFieldContraintMaxAggregateOutputType | null
  }

  type GetStringFieldContraintGroupByPayload<T extends StringFieldContraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StringFieldContraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StringFieldContraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StringFieldContraintGroupByOutputType[P]>
            : GetScalarType<T[P], StringFieldContraintGroupByOutputType[P]>
        }
      >
    >


  export type StringFieldContraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_length?: boolean
    max_length?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stringFieldContraint"]>

  export type StringFieldContraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_length?: boolean
    max_length?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stringFieldContraint"]>

  export type StringFieldContraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_length?: boolean
    max_length?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stringFieldContraint"]>

  export type StringFieldContraintSelectScalar = {
    id?: boolean
    min_length?: boolean
    max_length?: boolean
    default_value?: boolean
    constraint_id?: boolean
  }

  export type StringFieldContraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "min_length" | "max_length" | "default_value" | "constraint_id", ExtArgs["result"]["stringFieldContraint"]>
  export type StringFieldContraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type StringFieldContraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type StringFieldContraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }

  export type $StringFieldContraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StringFieldContraint"
    objects: {
      constraint: Prisma.$DirectoryFieldConstraintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      min_length: number | null
      max_length: number | null
      default_value: string | null
      constraint_id: string
    }, ExtArgs["result"]["stringFieldContraint"]>
    composites: {}
  }

  type StringFieldContraintGetPayload<S extends boolean | null | undefined | StringFieldContraintDefaultArgs> = $Result.GetResult<Prisma.$StringFieldContraintPayload, S>

  type StringFieldContraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StringFieldContraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StringFieldContraintCountAggregateInputType | true
    }

  export interface StringFieldContraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StringFieldContraint'], meta: { name: 'StringFieldContraint' } }
    /**
     * Find zero or one StringFieldContraint that matches the filter.
     * @param {StringFieldContraintFindUniqueArgs} args - Arguments to find a StringFieldContraint
     * @example
     * // Get one StringFieldContraint
     * const stringFieldContraint = await prisma.stringFieldContraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StringFieldContraintFindUniqueArgs>(args: SelectSubset<T, StringFieldContraintFindUniqueArgs<ExtArgs>>): Prisma__StringFieldContraintClient<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StringFieldContraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StringFieldContraintFindUniqueOrThrowArgs} args - Arguments to find a StringFieldContraint
     * @example
     * // Get one StringFieldContraint
     * const stringFieldContraint = await prisma.stringFieldContraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StringFieldContraintFindUniqueOrThrowArgs>(args: SelectSubset<T, StringFieldContraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StringFieldContraintClient<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StringFieldContraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StringFieldContraintFindFirstArgs} args - Arguments to find a StringFieldContraint
     * @example
     * // Get one StringFieldContraint
     * const stringFieldContraint = await prisma.stringFieldContraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StringFieldContraintFindFirstArgs>(args?: SelectSubset<T, StringFieldContraintFindFirstArgs<ExtArgs>>): Prisma__StringFieldContraintClient<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StringFieldContraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StringFieldContraintFindFirstOrThrowArgs} args - Arguments to find a StringFieldContraint
     * @example
     * // Get one StringFieldContraint
     * const stringFieldContraint = await prisma.stringFieldContraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StringFieldContraintFindFirstOrThrowArgs>(args?: SelectSubset<T, StringFieldContraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__StringFieldContraintClient<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StringFieldContraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StringFieldContraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StringFieldContraints
     * const stringFieldContraints = await prisma.stringFieldContraint.findMany()
     * 
     * // Get first 10 StringFieldContraints
     * const stringFieldContraints = await prisma.stringFieldContraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stringFieldContraintWithIdOnly = await prisma.stringFieldContraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StringFieldContraintFindManyArgs>(args?: SelectSubset<T, StringFieldContraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StringFieldContraint.
     * @param {StringFieldContraintCreateArgs} args - Arguments to create a StringFieldContraint.
     * @example
     * // Create one StringFieldContraint
     * const StringFieldContraint = await prisma.stringFieldContraint.create({
     *   data: {
     *     // ... data to create a StringFieldContraint
     *   }
     * })
     * 
     */
    create<T extends StringFieldContraintCreateArgs>(args: SelectSubset<T, StringFieldContraintCreateArgs<ExtArgs>>): Prisma__StringFieldContraintClient<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StringFieldContraints.
     * @param {StringFieldContraintCreateManyArgs} args - Arguments to create many StringFieldContraints.
     * @example
     * // Create many StringFieldContraints
     * const stringFieldContraint = await prisma.stringFieldContraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StringFieldContraintCreateManyArgs>(args?: SelectSubset<T, StringFieldContraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StringFieldContraints and returns the data saved in the database.
     * @param {StringFieldContraintCreateManyAndReturnArgs} args - Arguments to create many StringFieldContraints.
     * @example
     * // Create many StringFieldContraints
     * const stringFieldContraint = await prisma.stringFieldContraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StringFieldContraints and only return the `id`
     * const stringFieldContraintWithIdOnly = await prisma.stringFieldContraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StringFieldContraintCreateManyAndReturnArgs>(args?: SelectSubset<T, StringFieldContraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StringFieldContraint.
     * @param {StringFieldContraintDeleteArgs} args - Arguments to delete one StringFieldContraint.
     * @example
     * // Delete one StringFieldContraint
     * const StringFieldContraint = await prisma.stringFieldContraint.delete({
     *   where: {
     *     // ... filter to delete one StringFieldContraint
     *   }
     * })
     * 
     */
    delete<T extends StringFieldContraintDeleteArgs>(args: SelectSubset<T, StringFieldContraintDeleteArgs<ExtArgs>>): Prisma__StringFieldContraintClient<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StringFieldContraint.
     * @param {StringFieldContraintUpdateArgs} args - Arguments to update one StringFieldContraint.
     * @example
     * // Update one StringFieldContraint
     * const stringFieldContraint = await prisma.stringFieldContraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StringFieldContraintUpdateArgs>(args: SelectSubset<T, StringFieldContraintUpdateArgs<ExtArgs>>): Prisma__StringFieldContraintClient<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StringFieldContraints.
     * @param {StringFieldContraintDeleteManyArgs} args - Arguments to filter StringFieldContraints to delete.
     * @example
     * // Delete a few StringFieldContraints
     * const { count } = await prisma.stringFieldContraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StringFieldContraintDeleteManyArgs>(args?: SelectSubset<T, StringFieldContraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StringFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StringFieldContraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StringFieldContraints
     * const stringFieldContraint = await prisma.stringFieldContraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StringFieldContraintUpdateManyArgs>(args: SelectSubset<T, StringFieldContraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StringFieldContraints and returns the data updated in the database.
     * @param {StringFieldContraintUpdateManyAndReturnArgs} args - Arguments to update many StringFieldContraints.
     * @example
     * // Update many StringFieldContraints
     * const stringFieldContraint = await prisma.stringFieldContraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StringFieldContraints and only return the `id`
     * const stringFieldContraintWithIdOnly = await prisma.stringFieldContraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StringFieldContraintUpdateManyAndReturnArgs>(args: SelectSubset<T, StringFieldContraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StringFieldContraint.
     * @param {StringFieldContraintUpsertArgs} args - Arguments to update or create a StringFieldContraint.
     * @example
     * // Update or create a StringFieldContraint
     * const stringFieldContraint = await prisma.stringFieldContraint.upsert({
     *   create: {
     *     // ... data to create a StringFieldContraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StringFieldContraint we want to update
     *   }
     * })
     */
    upsert<T extends StringFieldContraintUpsertArgs>(args: SelectSubset<T, StringFieldContraintUpsertArgs<ExtArgs>>): Prisma__StringFieldContraintClient<$Result.GetResult<Prisma.$StringFieldContraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StringFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StringFieldContraintCountArgs} args - Arguments to filter StringFieldContraints to count.
     * @example
     * // Count the number of StringFieldContraints
     * const count = await prisma.stringFieldContraint.count({
     *   where: {
     *     // ... the filter for the StringFieldContraints we want to count
     *   }
     * })
    **/
    count<T extends StringFieldContraintCountArgs>(
      args?: Subset<T, StringFieldContraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StringFieldContraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StringFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StringFieldContraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StringFieldContraintAggregateArgs>(args: Subset<T, StringFieldContraintAggregateArgs>): Prisma.PrismaPromise<GetStringFieldContraintAggregateType<T>>

    /**
     * Group by StringFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StringFieldContraintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StringFieldContraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StringFieldContraintGroupByArgs['orderBy'] }
        : { orderBy?: StringFieldContraintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StringFieldContraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStringFieldContraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StringFieldContraint model
   */
  readonly fields: StringFieldContraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StringFieldContraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StringFieldContraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constraint<T extends DirectoryFieldConstraintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraintDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StringFieldContraint model
   */
  interface StringFieldContraintFieldRefs {
    readonly id: FieldRef<"StringFieldContraint", 'String'>
    readonly min_length: FieldRef<"StringFieldContraint", 'Int'>
    readonly max_length: FieldRef<"StringFieldContraint", 'Int'>
    readonly default_value: FieldRef<"StringFieldContraint", 'String'>
    readonly constraint_id: FieldRef<"StringFieldContraint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StringFieldContraint findUnique
   */
  export type StringFieldContraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which StringFieldContraint to fetch.
     */
    where: StringFieldContraintWhereUniqueInput
  }

  /**
   * StringFieldContraint findUniqueOrThrow
   */
  export type StringFieldContraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which StringFieldContraint to fetch.
     */
    where: StringFieldContraintWhereUniqueInput
  }

  /**
   * StringFieldContraint findFirst
   */
  export type StringFieldContraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which StringFieldContraint to fetch.
     */
    where?: StringFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StringFieldContraints to fetch.
     */
    orderBy?: StringFieldContraintOrderByWithRelationInput | StringFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StringFieldContraints.
     */
    cursor?: StringFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StringFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StringFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StringFieldContraints.
     */
    distinct?: StringFieldContraintScalarFieldEnum | StringFieldContraintScalarFieldEnum[]
  }

  /**
   * StringFieldContraint findFirstOrThrow
   */
  export type StringFieldContraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which StringFieldContraint to fetch.
     */
    where?: StringFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StringFieldContraints to fetch.
     */
    orderBy?: StringFieldContraintOrderByWithRelationInput | StringFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StringFieldContraints.
     */
    cursor?: StringFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StringFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StringFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StringFieldContraints.
     */
    distinct?: StringFieldContraintScalarFieldEnum | StringFieldContraintScalarFieldEnum[]
  }

  /**
   * StringFieldContraint findMany
   */
  export type StringFieldContraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which StringFieldContraints to fetch.
     */
    where?: StringFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StringFieldContraints to fetch.
     */
    orderBy?: StringFieldContraintOrderByWithRelationInput | StringFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StringFieldContraints.
     */
    cursor?: StringFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StringFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StringFieldContraints.
     */
    skip?: number
    distinct?: StringFieldContraintScalarFieldEnum | StringFieldContraintScalarFieldEnum[]
  }

  /**
   * StringFieldContraint create
   */
  export type StringFieldContraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to create a StringFieldContraint.
     */
    data: XOR<StringFieldContraintCreateInput, StringFieldContraintUncheckedCreateInput>
  }

  /**
   * StringFieldContraint createMany
   */
  export type StringFieldContraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StringFieldContraints.
     */
    data: StringFieldContraintCreateManyInput | StringFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StringFieldContraint createManyAndReturn
   */
  export type StringFieldContraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to create many StringFieldContraints.
     */
    data: StringFieldContraintCreateManyInput | StringFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StringFieldContraint update
   */
  export type StringFieldContraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to update a StringFieldContraint.
     */
    data: XOR<StringFieldContraintUpdateInput, StringFieldContraintUncheckedUpdateInput>
    /**
     * Choose, which StringFieldContraint to update.
     */
    where: StringFieldContraintWhereUniqueInput
  }

  /**
   * StringFieldContraint updateMany
   */
  export type StringFieldContraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StringFieldContraints.
     */
    data: XOR<StringFieldContraintUpdateManyMutationInput, StringFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which StringFieldContraints to update
     */
    where?: StringFieldContraintWhereInput
    /**
     * Limit how many StringFieldContraints to update.
     */
    limit?: number
  }

  /**
   * StringFieldContraint updateManyAndReturn
   */
  export type StringFieldContraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to update StringFieldContraints.
     */
    data: XOR<StringFieldContraintUpdateManyMutationInput, StringFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which StringFieldContraints to update
     */
    where?: StringFieldContraintWhereInput
    /**
     * Limit how many StringFieldContraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StringFieldContraint upsert
   */
  export type StringFieldContraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    /**
     * The filter to search for the StringFieldContraint to update in case it exists.
     */
    where: StringFieldContraintWhereUniqueInput
    /**
     * In case the StringFieldContraint found by the `where` argument doesn't exist, create a new StringFieldContraint with this data.
     */
    create: XOR<StringFieldContraintCreateInput, StringFieldContraintUncheckedCreateInput>
    /**
     * In case the StringFieldContraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StringFieldContraintUpdateInput, StringFieldContraintUncheckedUpdateInput>
  }

  /**
   * StringFieldContraint delete
   */
  export type StringFieldContraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter which StringFieldContraint to delete.
     */
    where: StringFieldContraintWhereUniqueInput
  }

  /**
   * StringFieldContraint deleteMany
   */
  export type StringFieldContraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StringFieldContraints to delete
     */
    where?: StringFieldContraintWhereInput
    /**
     * Limit how many StringFieldContraints to delete.
     */
    limit?: number
  }

  /**
   * StringFieldContraint without action
   */
  export type StringFieldContraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StringFieldContraint
     */
    select?: StringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StringFieldContraint
     */
    omit?: StringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StringFieldContraintInclude<ExtArgs> | null
  }


  /**
   * Model DateFieldContraint
   */

  export type AggregateDateFieldContraint = {
    _count: DateFieldContraintCountAggregateOutputType | null
    _min: DateFieldContraintMinAggregateOutputType | null
    _max: DateFieldContraintMaxAggregateOutputType | null
  }

  export type DateFieldContraintMinAggregateOutputType = {
    id: string | null
    min_value: string | null
    max_value: string | null
    default_value: string | null
    constraint_id: string | null
  }

  export type DateFieldContraintMaxAggregateOutputType = {
    id: string | null
    min_value: string | null
    max_value: string | null
    default_value: string | null
    constraint_id: string | null
  }

  export type DateFieldContraintCountAggregateOutputType = {
    id: number
    min_value: number
    max_value: number
    default_value: number
    constraint_id: number
    _all: number
  }


  export type DateFieldContraintMinAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
  }

  export type DateFieldContraintMaxAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
  }

  export type DateFieldContraintCountAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
    _all?: true
  }

  export type DateFieldContraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateFieldContraint to aggregate.
     */
    where?: DateFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateFieldContraints to fetch.
     */
    orderBy?: DateFieldContraintOrderByWithRelationInput | DateFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateFieldContraints
    **/
    _count?: true | DateFieldContraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateFieldContraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateFieldContraintMaxAggregateInputType
  }

  export type GetDateFieldContraintAggregateType<T extends DateFieldContraintAggregateArgs> = {
        [P in keyof T & keyof AggregateDateFieldContraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateFieldContraint[P]>
      : GetScalarType<T[P], AggregateDateFieldContraint[P]>
  }




  export type DateFieldContraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DateFieldContraintWhereInput
    orderBy?: DateFieldContraintOrderByWithAggregationInput | DateFieldContraintOrderByWithAggregationInput[]
    by: DateFieldContraintScalarFieldEnum[] | DateFieldContraintScalarFieldEnum
    having?: DateFieldContraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateFieldContraintCountAggregateInputType | true
    _min?: DateFieldContraintMinAggregateInputType
    _max?: DateFieldContraintMaxAggregateInputType
  }

  export type DateFieldContraintGroupByOutputType = {
    id: string
    min_value: string | null
    max_value: string | null
    default_value: string | null
    constraint_id: string
    _count: DateFieldContraintCountAggregateOutputType | null
    _min: DateFieldContraintMinAggregateOutputType | null
    _max: DateFieldContraintMaxAggregateOutputType | null
  }

  type GetDateFieldContraintGroupByPayload<T extends DateFieldContraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DateFieldContraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateFieldContraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateFieldContraintGroupByOutputType[P]>
            : GetScalarType<T[P], DateFieldContraintGroupByOutputType[P]>
        }
      >
    >


  export type DateFieldContraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateFieldContraint"]>

  export type DateFieldContraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateFieldContraint"]>

  export type DateFieldContraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateFieldContraint"]>

  export type DateFieldContraintSelectScalar = {
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
  }

  export type DateFieldContraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "min_value" | "max_value" | "default_value" | "constraint_id", ExtArgs["result"]["dateFieldContraint"]>
  export type DateFieldContraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type DateFieldContraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type DateFieldContraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }

  export type $DateFieldContraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DateFieldContraint"
    objects: {
      constraint: Prisma.$DirectoryFieldConstraintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      min_value: string | null
      max_value: string | null
      default_value: string | null
      constraint_id: string
    }, ExtArgs["result"]["dateFieldContraint"]>
    composites: {}
  }

  type DateFieldContraintGetPayload<S extends boolean | null | undefined | DateFieldContraintDefaultArgs> = $Result.GetResult<Prisma.$DateFieldContraintPayload, S>

  type DateFieldContraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DateFieldContraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DateFieldContraintCountAggregateInputType | true
    }

  export interface DateFieldContraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DateFieldContraint'], meta: { name: 'DateFieldContraint' } }
    /**
     * Find zero or one DateFieldContraint that matches the filter.
     * @param {DateFieldContraintFindUniqueArgs} args - Arguments to find a DateFieldContraint
     * @example
     * // Get one DateFieldContraint
     * const dateFieldContraint = await prisma.dateFieldContraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DateFieldContraintFindUniqueArgs>(args: SelectSubset<T, DateFieldContraintFindUniqueArgs<ExtArgs>>): Prisma__DateFieldContraintClient<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DateFieldContraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DateFieldContraintFindUniqueOrThrowArgs} args - Arguments to find a DateFieldContraint
     * @example
     * // Get one DateFieldContraint
     * const dateFieldContraint = await prisma.dateFieldContraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DateFieldContraintFindUniqueOrThrowArgs>(args: SelectSubset<T, DateFieldContraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DateFieldContraintClient<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateFieldContraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFieldContraintFindFirstArgs} args - Arguments to find a DateFieldContraint
     * @example
     * // Get one DateFieldContraint
     * const dateFieldContraint = await prisma.dateFieldContraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DateFieldContraintFindFirstArgs>(args?: SelectSubset<T, DateFieldContraintFindFirstArgs<ExtArgs>>): Prisma__DateFieldContraintClient<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateFieldContraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFieldContraintFindFirstOrThrowArgs} args - Arguments to find a DateFieldContraint
     * @example
     * // Get one DateFieldContraint
     * const dateFieldContraint = await prisma.dateFieldContraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DateFieldContraintFindFirstOrThrowArgs>(args?: SelectSubset<T, DateFieldContraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__DateFieldContraintClient<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DateFieldContraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFieldContraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateFieldContraints
     * const dateFieldContraints = await prisma.dateFieldContraint.findMany()
     * 
     * // Get first 10 DateFieldContraints
     * const dateFieldContraints = await prisma.dateFieldContraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateFieldContraintWithIdOnly = await prisma.dateFieldContraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DateFieldContraintFindManyArgs>(args?: SelectSubset<T, DateFieldContraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DateFieldContraint.
     * @param {DateFieldContraintCreateArgs} args - Arguments to create a DateFieldContraint.
     * @example
     * // Create one DateFieldContraint
     * const DateFieldContraint = await prisma.dateFieldContraint.create({
     *   data: {
     *     // ... data to create a DateFieldContraint
     *   }
     * })
     * 
     */
    create<T extends DateFieldContraintCreateArgs>(args: SelectSubset<T, DateFieldContraintCreateArgs<ExtArgs>>): Prisma__DateFieldContraintClient<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DateFieldContraints.
     * @param {DateFieldContraintCreateManyArgs} args - Arguments to create many DateFieldContraints.
     * @example
     * // Create many DateFieldContraints
     * const dateFieldContraint = await prisma.dateFieldContraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DateFieldContraintCreateManyArgs>(args?: SelectSubset<T, DateFieldContraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DateFieldContraints and returns the data saved in the database.
     * @param {DateFieldContraintCreateManyAndReturnArgs} args - Arguments to create many DateFieldContraints.
     * @example
     * // Create many DateFieldContraints
     * const dateFieldContraint = await prisma.dateFieldContraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DateFieldContraints and only return the `id`
     * const dateFieldContraintWithIdOnly = await prisma.dateFieldContraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DateFieldContraintCreateManyAndReturnArgs>(args?: SelectSubset<T, DateFieldContraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DateFieldContraint.
     * @param {DateFieldContraintDeleteArgs} args - Arguments to delete one DateFieldContraint.
     * @example
     * // Delete one DateFieldContraint
     * const DateFieldContraint = await prisma.dateFieldContraint.delete({
     *   where: {
     *     // ... filter to delete one DateFieldContraint
     *   }
     * })
     * 
     */
    delete<T extends DateFieldContraintDeleteArgs>(args: SelectSubset<T, DateFieldContraintDeleteArgs<ExtArgs>>): Prisma__DateFieldContraintClient<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DateFieldContraint.
     * @param {DateFieldContraintUpdateArgs} args - Arguments to update one DateFieldContraint.
     * @example
     * // Update one DateFieldContraint
     * const dateFieldContraint = await prisma.dateFieldContraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DateFieldContraintUpdateArgs>(args: SelectSubset<T, DateFieldContraintUpdateArgs<ExtArgs>>): Prisma__DateFieldContraintClient<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DateFieldContraints.
     * @param {DateFieldContraintDeleteManyArgs} args - Arguments to filter DateFieldContraints to delete.
     * @example
     * // Delete a few DateFieldContraints
     * const { count } = await prisma.dateFieldContraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DateFieldContraintDeleteManyArgs>(args?: SelectSubset<T, DateFieldContraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFieldContraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateFieldContraints
     * const dateFieldContraint = await prisma.dateFieldContraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DateFieldContraintUpdateManyArgs>(args: SelectSubset<T, DateFieldContraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateFieldContraints and returns the data updated in the database.
     * @param {DateFieldContraintUpdateManyAndReturnArgs} args - Arguments to update many DateFieldContraints.
     * @example
     * // Update many DateFieldContraints
     * const dateFieldContraint = await prisma.dateFieldContraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DateFieldContraints and only return the `id`
     * const dateFieldContraintWithIdOnly = await prisma.dateFieldContraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DateFieldContraintUpdateManyAndReturnArgs>(args: SelectSubset<T, DateFieldContraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DateFieldContraint.
     * @param {DateFieldContraintUpsertArgs} args - Arguments to update or create a DateFieldContraint.
     * @example
     * // Update or create a DateFieldContraint
     * const dateFieldContraint = await prisma.dateFieldContraint.upsert({
     *   create: {
     *     // ... data to create a DateFieldContraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateFieldContraint we want to update
     *   }
     * })
     */
    upsert<T extends DateFieldContraintUpsertArgs>(args: SelectSubset<T, DateFieldContraintUpsertArgs<ExtArgs>>): Prisma__DateFieldContraintClient<$Result.GetResult<Prisma.$DateFieldContraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DateFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFieldContraintCountArgs} args - Arguments to filter DateFieldContraints to count.
     * @example
     * // Count the number of DateFieldContraints
     * const count = await prisma.dateFieldContraint.count({
     *   where: {
     *     // ... the filter for the DateFieldContraints we want to count
     *   }
     * })
    **/
    count<T extends DateFieldContraintCountArgs>(
      args?: Subset<T, DateFieldContraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateFieldContraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFieldContraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DateFieldContraintAggregateArgs>(args: Subset<T, DateFieldContraintAggregateArgs>): Prisma.PrismaPromise<GetDateFieldContraintAggregateType<T>>

    /**
     * Group by DateFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFieldContraintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DateFieldContraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateFieldContraintGroupByArgs['orderBy'] }
        : { orderBy?: DateFieldContraintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DateFieldContraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateFieldContraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DateFieldContraint model
   */
  readonly fields: DateFieldContraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DateFieldContraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DateFieldContraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constraint<T extends DirectoryFieldConstraintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraintDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DateFieldContraint model
   */
  interface DateFieldContraintFieldRefs {
    readonly id: FieldRef<"DateFieldContraint", 'String'>
    readonly min_value: FieldRef<"DateFieldContraint", 'String'>
    readonly max_value: FieldRef<"DateFieldContraint", 'String'>
    readonly default_value: FieldRef<"DateFieldContraint", 'String'>
    readonly constraint_id: FieldRef<"DateFieldContraint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DateFieldContraint findUnique
   */
  export type DateFieldContraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateFieldContraint to fetch.
     */
    where: DateFieldContraintWhereUniqueInput
  }

  /**
   * DateFieldContraint findUniqueOrThrow
   */
  export type DateFieldContraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateFieldContraint to fetch.
     */
    where: DateFieldContraintWhereUniqueInput
  }

  /**
   * DateFieldContraint findFirst
   */
  export type DateFieldContraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateFieldContraint to fetch.
     */
    where?: DateFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateFieldContraints to fetch.
     */
    orderBy?: DateFieldContraintOrderByWithRelationInput | DateFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateFieldContraints.
     */
    cursor?: DateFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateFieldContraints.
     */
    distinct?: DateFieldContraintScalarFieldEnum | DateFieldContraintScalarFieldEnum[]
  }

  /**
   * DateFieldContraint findFirstOrThrow
   */
  export type DateFieldContraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateFieldContraint to fetch.
     */
    where?: DateFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateFieldContraints to fetch.
     */
    orderBy?: DateFieldContraintOrderByWithRelationInput | DateFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateFieldContraints.
     */
    cursor?: DateFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateFieldContraints.
     */
    distinct?: DateFieldContraintScalarFieldEnum | DateFieldContraintScalarFieldEnum[]
  }

  /**
   * DateFieldContraint findMany
   */
  export type DateFieldContraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateFieldContraints to fetch.
     */
    where?: DateFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateFieldContraints to fetch.
     */
    orderBy?: DateFieldContraintOrderByWithRelationInput | DateFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateFieldContraints.
     */
    cursor?: DateFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateFieldContraints.
     */
    skip?: number
    distinct?: DateFieldContraintScalarFieldEnum | DateFieldContraintScalarFieldEnum[]
  }

  /**
   * DateFieldContraint create
   */
  export type DateFieldContraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to create a DateFieldContraint.
     */
    data: XOR<DateFieldContraintCreateInput, DateFieldContraintUncheckedCreateInput>
  }

  /**
   * DateFieldContraint createMany
   */
  export type DateFieldContraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DateFieldContraints.
     */
    data: DateFieldContraintCreateManyInput | DateFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DateFieldContraint createManyAndReturn
   */
  export type DateFieldContraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to create many DateFieldContraints.
     */
    data: DateFieldContraintCreateManyInput | DateFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DateFieldContraint update
   */
  export type DateFieldContraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to update a DateFieldContraint.
     */
    data: XOR<DateFieldContraintUpdateInput, DateFieldContraintUncheckedUpdateInput>
    /**
     * Choose, which DateFieldContraint to update.
     */
    where: DateFieldContraintWhereUniqueInput
  }

  /**
   * DateFieldContraint updateMany
   */
  export type DateFieldContraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DateFieldContraints.
     */
    data: XOR<DateFieldContraintUpdateManyMutationInput, DateFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which DateFieldContraints to update
     */
    where?: DateFieldContraintWhereInput
    /**
     * Limit how many DateFieldContraints to update.
     */
    limit?: number
  }

  /**
   * DateFieldContraint updateManyAndReturn
   */
  export type DateFieldContraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to update DateFieldContraints.
     */
    data: XOR<DateFieldContraintUpdateManyMutationInput, DateFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which DateFieldContraints to update
     */
    where?: DateFieldContraintWhereInput
    /**
     * Limit how many DateFieldContraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DateFieldContraint upsert
   */
  export type DateFieldContraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    /**
     * The filter to search for the DateFieldContraint to update in case it exists.
     */
    where: DateFieldContraintWhereUniqueInput
    /**
     * In case the DateFieldContraint found by the `where` argument doesn't exist, create a new DateFieldContraint with this data.
     */
    create: XOR<DateFieldContraintCreateInput, DateFieldContraintUncheckedCreateInput>
    /**
     * In case the DateFieldContraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateFieldContraintUpdateInput, DateFieldContraintUncheckedUpdateInput>
  }

  /**
   * DateFieldContraint delete
   */
  export type DateFieldContraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
    /**
     * Filter which DateFieldContraint to delete.
     */
    where: DateFieldContraintWhereUniqueInput
  }

  /**
   * DateFieldContraint deleteMany
   */
  export type DateFieldContraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateFieldContraints to delete
     */
    where?: DateFieldContraintWhereInput
    /**
     * Limit how many DateFieldContraints to delete.
     */
    limit?: number
  }

  /**
   * DateFieldContraint without action
   */
  export type DateFieldContraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateFieldContraint
     */
    select?: DateFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateFieldContraint
     */
    omit?: DateFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateFieldContraintInclude<ExtArgs> | null
  }


  /**
   * Model DateTimeFieldContraint
   */

  export type AggregateDateTimeFieldContraint = {
    _count: DateTimeFieldContraintCountAggregateOutputType | null
    _min: DateTimeFieldContraintMinAggregateOutputType | null
    _max: DateTimeFieldContraintMaxAggregateOutputType | null
  }

  export type DateTimeFieldContraintMinAggregateOutputType = {
    id: string | null
    min_value: Date | null
    max_value: Date | null
    default_value: Date | null
    constraint_id: string | null
  }

  export type DateTimeFieldContraintMaxAggregateOutputType = {
    id: string | null
    min_value: Date | null
    max_value: Date | null
    default_value: Date | null
    constraint_id: string | null
  }

  export type DateTimeFieldContraintCountAggregateOutputType = {
    id: number
    min_value: number
    max_value: number
    default_value: number
    constraint_id: number
    _all: number
  }


  export type DateTimeFieldContraintMinAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
  }

  export type DateTimeFieldContraintMaxAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
  }

  export type DateTimeFieldContraintCountAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
    _all?: true
  }

  export type DateTimeFieldContraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateTimeFieldContraint to aggregate.
     */
    where?: DateTimeFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateTimeFieldContraints to fetch.
     */
    orderBy?: DateTimeFieldContraintOrderByWithRelationInput | DateTimeFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateTimeFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateTimeFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateTimeFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateTimeFieldContraints
    **/
    _count?: true | DateTimeFieldContraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateTimeFieldContraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateTimeFieldContraintMaxAggregateInputType
  }

  export type GetDateTimeFieldContraintAggregateType<T extends DateTimeFieldContraintAggregateArgs> = {
        [P in keyof T & keyof AggregateDateTimeFieldContraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateTimeFieldContraint[P]>
      : GetScalarType<T[P], AggregateDateTimeFieldContraint[P]>
  }




  export type DateTimeFieldContraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DateTimeFieldContraintWhereInput
    orderBy?: DateTimeFieldContraintOrderByWithAggregationInput | DateTimeFieldContraintOrderByWithAggregationInput[]
    by: DateTimeFieldContraintScalarFieldEnum[] | DateTimeFieldContraintScalarFieldEnum
    having?: DateTimeFieldContraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateTimeFieldContraintCountAggregateInputType | true
    _min?: DateTimeFieldContraintMinAggregateInputType
    _max?: DateTimeFieldContraintMaxAggregateInputType
  }

  export type DateTimeFieldContraintGroupByOutputType = {
    id: string
    min_value: Date | null
    max_value: Date | null
    default_value: Date | null
    constraint_id: string
    _count: DateTimeFieldContraintCountAggregateOutputType | null
    _min: DateTimeFieldContraintMinAggregateOutputType | null
    _max: DateTimeFieldContraintMaxAggregateOutputType | null
  }

  type GetDateTimeFieldContraintGroupByPayload<T extends DateTimeFieldContraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DateTimeFieldContraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateTimeFieldContraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateTimeFieldContraintGroupByOutputType[P]>
            : GetScalarType<T[P], DateTimeFieldContraintGroupByOutputType[P]>
        }
      >
    >


  export type DateTimeFieldContraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateTimeFieldContraint"]>

  export type DateTimeFieldContraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateTimeFieldContraint"]>

  export type DateTimeFieldContraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateTimeFieldContraint"]>

  export type DateTimeFieldContraintSelectScalar = {
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
  }

  export type DateTimeFieldContraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "min_value" | "max_value" | "default_value" | "constraint_id", ExtArgs["result"]["dateTimeFieldContraint"]>
  export type DateTimeFieldContraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type DateTimeFieldContraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type DateTimeFieldContraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }

  export type $DateTimeFieldContraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DateTimeFieldContraint"
    objects: {
      constraint: Prisma.$DirectoryFieldConstraintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      min_value: Date | null
      max_value: Date | null
      default_value: Date | null
      constraint_id: string
    }, ExtArgs["result"]["dateTimeFieldContraint"]>
    composites: {}
  }

  type DateTimeFieldContraintGetPayload<S extends boolean | null | undefined | DateTimeFieldContraintDefaultArgs> = $Result.GetResult<Prisma.$DateTimeFieldContraintPayload, S>

  type DateTimeFieldContraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DateTimeFieldContraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DateTimeFieldContraintCountAggregateInputType | true
    }

  export interface DateTimeFieldContraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DateTimeFieldContraint'], meta: { name: 'DateTimeFieldContraint' } }
    /**
     * Find zero or one DateTimeFieldContraint that matches the filter.
     * @param {DateTimeFieldContraintFindUniqueArgs} args - Arguments to find a DateTimeFieldContraint
     * @example
     * // Get one DateTimeFieldContraint
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DateTimeFieldContraintFindUniqueArgs>(args: SelectSubset<T, DateTimeFieldContraintFindUniqueArgs<ExtArgs>>): Prisma__DateTimeFieldContraintClient<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DateTimeFieldContraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DateTimeFieldContraintFindUniqueOrThrowArgs} args - Arguments to find a DateTimeFieldContraint
     * @example
     * // Get one DateTimeFieldContraint
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DateTimeFieldContraintFindUniqueOrThrowArgs>(args: SelectSubset<T, DateTimeFieldContraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DateTimeFieldContraintClient<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateTimeFieldContraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateTimeFieldContraintFindFirstArgs} args - Arguments to find a DateTimeFieldContraint
     * @example
     * // Get one DateTimeFieldContraint
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DateTimeFieldContraintFindFirstArgs>(args?: SelectSubset<T, DateTimeFieldContraintFindFirstArgs<ExtArgs>>): Prisma__DateTimeFieldContraintClient<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateTimeFieldContraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateTimeFieldContraintFindFirstOrThrowArgs} args - Arguments to find a DateTimeFieldContraint
     * @example
     * // Get one DateTimeFieldContraint
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DateTimeFieldContraintFindFirstOrThrowArgs>(args?: SelectSubset<T, DateTimeFieldContraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__DateTimeFieldContraintClient<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DateTimeFieldContraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateTimeFieldContraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateTimeFieldContraints
     * const dateTimeFieldContraints = await prisma.dateTimeFieldContraint.findMany()
     * 
     * // Get first 10 DateTimeFieldContraints
     * const dateTimeFieldContraints = await prisma.dateTimeFieldContraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateTimeFieldContraintWithIdOnly = await prisma.dateTimeFieldContraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DateTimeFieldContraintFindManyArgs>(args?: SelectSubset<T, DateTimeFieldContraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DateTimeFieldContraint.
     * @param {DateTimeFieldContraintCreateArgs} args - Arguments to create a DateTimeFieldContraint.
     * @example
     * // Create one DateTimeFieldContraint
     * const DateTimeFieldContraint = await prisma.dateTimeFieldContraint.create({
     *   data: {
     *     // ... data to create a DateTimeFieldContraint
     *   }
     * })
     * 
     */
    create<T extends DateTimeFieldContraintCreateArgs>(args: SelectSubset<T, DateTimeFieldContraintCreateArgs<ExtArgs>>): Prisma__DateTimeFieldContraintClient<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DateTimeFieldContraints.
     * @param {DateTimeFieldContraintCreateManyArgs} args - Arguments to create many DateTimeFieldContraints.
     * @example
     * // Create many DateTimeFieldContraints
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DateTimeFieldContraintCreateManyArgs>(args?: SelectSubset<T, DateTimeFieldContraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DateTimeFieldContraints and returns the data saved in the database.
     * @param {DateTimeFieldContraintCreateManyAndReturnArgs} args - Arguments to create many DateTimeFieldContraints.
     * @example
     * // Create many DateTimeFieldContraints
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DateTimeFieldContraints and only return the `id`
     * const dateTimeFieldContraintWithIdOnly = await prisma.dateTimeFieldContraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DateTimeFieldContraintCreateManyAndReturnArgs>(args?: SelectSubset<T, DateTimeFieldContraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DateTimeFieldContraint.
     * @param {DateTimeFieldContraintDeleteArgs} args - Arguments to delete one DateTimeFieldContraint.
     * @example
     * // Delete one DateTimeFieldContraint
     * const DateTimeFieldContraint = await prisma.dateTimeFieldContraint.delete({
     *   where: {
     *     // ... filter to delete one DateTimeFieldContraint
     *   }
     * })
     * 
     */
    delete<T extends DateTimeFieldContraintDeleteArgs>(args: SelectSubset<T, DateTimeFieldContraintDeleteArgs<ExtArgs>>): Prisma__DateTimeFieldContraintClient<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DateTimeFieldContraint.
     * @param {DateTimeFieldContraintUpdateArgs} args - Arguments to update one DateTimeFieldContraint.
     * @example
     * // Update one DateTimeFieldContraint
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DateTimeFieldContraintUpdateArgs>(args: SelectSubset<T, DateTimeFieldContraintUpdateArgs<ExtArgs>>): Prisma__DateTimeFieldContraintClient<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DateTimeFieldContraints.
     * @param {DateTimeFieldContraintDeleteManyArgs} args - Arguments to filter DateTimeFieldContraints to delete.
     * @example
     * // Delete a few DateTimeFieldContraints
     * const { count } = await prisma.dateTimeFieldContraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DateTimeFieldContraintDeleteManyArgs>(args?: SelectSubset<T, DateTimeFieldContraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateTimeFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateTimeFieldContraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateTimeFieldContraints
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DateTimeFieldContraintUpdateManyArgs>(args: SelectSubset<T, DateTimeFieldContraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateTimeFieldContraints and returns the data updated in the database.
     * @param {DateTimeFieldContraintUpdateManyAndReturnArgs} args - Arguments to update many DateTimeFieldContraints.
     * @example
     * // Update many DateTimeFieldContraints
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DateTimeFieldContraints and only return the `id`
     * const dateTimeFieldContraintWithIdOnly = await prisma.dateTimeFieldContraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DateTimeFieldContraintUpdateManyAndReturnArgs>(args: SelectSubset<T, DateTimeFieldContraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DateTimeFieldContraint.
     * @param {DateTimeFieldContraintUpsertArgs} args - Arguments to update or create a DateTimeFieldContraint.
     * @example
     * // Update or create a DateTimeFieldContraint
     * const dateTimeFieldContraint = await prisma.dateTimeFieldContraint.upsert({
     *   create: {
     *     // ... data to create a DateTimeFieldContraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateTimeFieldContraint we want to update
     *   }
     * })
     */
    upsert<T extends DateTimeFieldContraintUpsertArgs>(args: SelectSubset<T, DateTimeFieldContraintUpsertArgs<ExtArgs>>): Prisma__DateTimeFieldContraintClient<$Result.GetResult<Prisma.$DateTimeFieldContraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DateTimeFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateTimeFieldContraintCountArgs} args - Arguments to filter DateTimeFieldContraints to count.
     * @example
     * // Count the number of DateTimeFieldContraints
     * const count = await prisma.dateTimeFieldContraint.count({
     *   where: {
     *     // ... the filter for the DateTimeFieldContraints we want to count
     *   }
     * })
    **/
    count<T extends DateTimeFieldContraintCountArgs>(
      args?: Subset<T, DateTimeFieldContraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateTimeFieldContraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateTimeFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateTimeFieldContraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DateTimeFieldContraintAggregateArgs>(args: Subset<T, DateTimeFieldContraintAggregateArgs>): Prisma.PrismaPromise<GetDateTimeFieldContraintAggregateType<T>>

    /**
     * Group by DateTimeFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateTimeFieldContraintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DateTimeFieldContraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateTimeFieldContraintGroupByArgs['orderBy'] }
        : { orderBy?: DateTimeFieldContraintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DateTimeFieldContraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateTimeFieldContraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DateTimeFieldContraint model
   */
  readonly fields: DateTimeFieldContraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DateTimeFieldContraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DateTimeFieldContraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constraint<T extends DirectoryFieldConstraintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraintDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DateTimeFieldContraint model
   */
  interface DateTimeFieldContraintFieldRefs {
    readonly id: FieldRef<"DateTimeFieldContraint", 'String'>
    readonly min_value: FieldRef<"DateTimeFieldContraint", 'DateTime'>
    readonly max_value: FieldRef<"DateTimeFieldContraint", 'DateTime'>
    readonly default_value: FieldRef<"DateTimeFieldContraint", 'DateTime'>
    readonly constraint_id: FieldRef<"DateTimeFieldContraint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DateTimeFieldContraint findUnique
   */
  export type DateTimeFieldContraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateTimeFieldContraint to fetch.
     */
    where: DateTimeFieldContraintWhereUniqueInput
  }

  /**
   * DateTimeFieldContraint findUniqueOrThrow
   */
  export type DateTimeFieldContraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateTimeFieldContraint to fetch.
     */
    where: DateTimeFieldContraintWhereUniqueInput
  }

  /**
   * DateTimeFieldContraint findFirst
   */
  export type DateTimeFieldContraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateTimeFieldContraint to fetch.
     */
    where?: DateTimeFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateTimeFieldContraints to fetch.
     */
    orderBy?: DateTimeFieldContraintOrderByWithRelationInput | DateTimeFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateTimeFieldContraints.
     */
    cursor?: DateTimeFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateTimeFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateTimeFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateTimeFieldContraints.
     */
    distinct?: DateTimeFieldContraintScalarFieldEnum | DateTimeFieldContraintScalarFieldEnum[]
  }

  /**
   * DateTimeFieldContraint findFirstOrThrow
   */
  export type DateTimeFieldContraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateTimeFieldContraint to fetch.
     */
    where?: DateTimeFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateTimeFieldContraints to fetch.
     */
    orderBy?: DateTimeFieldContraintOrderByWithRelationInput | DateTimeFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateTimeFieldContraints.
     */
    cursor?: DateTimeFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateTimeFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateTimeFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateTimeFieldContraints.
     */
    distinct?: DateTimeFieldContraintScalarFieldEnum | DateTimeFieldContraintScalarFieldEnum[]
  }

  /**
   * DateTimeFieldContraint findMany
   */
  export type DateTimeFieldContraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which DateTimeFieldContraints to fetch.
     */
    where?: DateTimeFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateTimeFieldContraints to fetch.
     */
    orderBy?: DateTimeFieldContraintOrderByWithRelationInput | DateTimeFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateTimeFieldContraints.
     */
    cursor?: DateTimeFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateTimeFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateTimeFieldContraints.
     */
    skip?: number
    distinct?: DateTimeFieldContraintScalarFieldEnum | DateTimeFieldContraintScalarFieldEnum[]
  }

  /**
   * DateTimeFieldContraint create
   */
  export type DateTimeFieldContraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to create a DateTimeFieldContraint.
     */
    data: XOR<DateTimeFieldContraintCreateInput, DateTimeFieldContraintUncheckedCreateInput>
  }

  /**
   * DateTimeFieldContraint createMany
   */
  export type DateTimeFieldContraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DateTimeFieldContraints.
     */
    data: DateTimeFieldContraintCreateManyInput | DateTimeFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DateTimeFieldContraint createManyAndReturn
   */
  export type DateTimeFieldContraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to create many DateTimeFieldContraints.
     */
    data: DateTimeFieldContraintCreateManyInput | DateTimeFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DateTimeFieldContraint update
   */
  export type DateTimeFieldContraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to update a DateTimeFieldContraint.
     */
    data: XOR<DateTimeFieldContraintUpdateInput, DateTimeFieldContraintUncheckedUpdateInput>
    /**
     * Choose, which DateTimeFieldContraint to update.
     */
    where: DateTimeFieldContraintWhereUniqueInput
  }

  /**
   * DateTimeFieldContraint updateMany
   */
  export type DateTimeFieldContraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DateTimeFieldContraints.
     */
    data: XOR<DateTimeFieldContraintUpdateManyMutationInput, DateTimeFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which DateTimeFieldContraints to update
     */
    where?: DateTimeFieldContraintWhereInput
    /**
     * Limit how many DateTimeFieldContraints to update.
     */
    limit?: number
  }

  /**
   * DateTimeFieldContraint updateManyAndReturn
   */
  export type DateTimeFieldContraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to update DateTimeFieldContraints.
     */
    data: XOR<DateTimeFieldContraintUpdateManyMutationInput, DateTimeFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which DateTimeFieldContraints to update
     */
    where?: DateTimeFieldContraintWhereInput
    /**
     * Limit how many DateTimeFieldContraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DateTimeFieldContraint upsert
   */
  export type DateTimeFieldContraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    /**
     * The filter to search for the DateTimeFieldContraint to update in case it exists.
     */
    where: DateTimeFieldContraintWhereUniqueInput
    /**
     * In case the DateTimeFieldContraint found by the `where` argument doesn't exist, create a new DateTimeFieldContraint with this data.
     */
    create: XOR<DateTimeFieldContraintCreateInput, DateTimeFieldContraintUncheckedCreateInput>
    /**
     * In case the DateTimeFieldContraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateTimeFieldContraintUpdateInput, DateTimeFieldContraintUncheckedUpdateInput>
  }

  /**
   * DateTimeFieldContraint delete
   */
  export type DateTimeFieldContraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter which DateTimeFieldContraint to delete.
     */
    where: DateTimeFieldContraintWhereUniqueInput
  }

  /**
   * DateTimeFieldContraint deleteMany
   */
  export type DateTimeFieldContraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateTimeFieldContraints to delete
     */
    where?: DateTimeFieldContraintWhereInput
    /**
     * Limit how many DateTimeFieldContraints to delete.
     */
    limit?: number
  }

  /**
   * DateTimeFieldContraint without action
   */
  export type DateTimeFieldContraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateTimeFieldContraint
     */
    select?: DateTimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateTimeFieldContraint
     */
    omit?: DateTimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateTimeFieldContraintInclude<ExtArgs> | null
  }


  /**
   * Model TimeFieldContraint
   */

  export type AggregateTimeFieldContraint = {
    _count: TimeFieldContraintCountAggregateOutputType | null
    _min: TimeFieldContraintMinAggregateOutputType | null
    _max: TimeFieldContraintMaxAggregateOutputType | null
  }

  export type TimeFieldContraintMinAggregateOutputType = {
    id: string | null
    min_value: string | null
    max_value: string | null
    default_value: string | null
    constraint_id: string | null
  }

  export type TimeFieldContraintMaxAggregateOutputType = {
    id: string | null
    min_value: string | null
    max_value: string | null
    default_value: string | null
    constraint_id: string | null
  }

  export type TimeFieldContraintCountAggregateOutputType = {
    id: number
    min_value: number
    max_value: number
    default_value: number
    constraint_id: number
    _all: number
  }


  export type TimeFieldContraintMinAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
  }

  export type TimeFieldContraintMaxAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
  }

  export type TimeFieldContraintCountAggregateInputType = {
    id?: true
    min_value?: true
    max_value?: true
    default_value?: true
    constraint_id?: true
    _all?: true
  }

  export type TimeFieldContraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeFieldContraint to aggregate.
     */
    where?: TimeFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeFieldContraints to fetch.
     */
    orderBy?: TimeFieldContraintOrderByWithRelationInput | TimeFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeFieldContraints
    **/
    _count?: true | TimeFieldContraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeFieldContraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeFieldContraintMaxAggregateInputType
  }

  export type GetTimeFieldContraintAggregateType<T extends TimeFieldContraintAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeFieldContraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeFieldContraint[P]>
      : GetScalarType<T[P], AggregateTimeFieldContraint[P]>
  }




  export type TimeFieldContraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeFieldContraintWhereInput
    orderBy?: TimeFieldContraintOrderByWithAggregationInput | TimeFieldContraintOrderByWithAggregationInput[]
    by: TimeFieldContraintScalarFieldEnum[] | TimeFieldContraintScalarFieldEnum
    having?: TimeFieldContraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeFieldContraintCountAggregateInputType | true
    _min?: TimeFieldContraintMinAggregateInputType
    _max?: TimeFieldContraintMaxAggregateInputType
  }

  export type TimeFieldContraintGroupByOutputType = {
    id: string
    min_value: string | null
    max_value: string | null
    default_value: string | null
    constraint_id: string
    _count: TimeFieldContraintCountAggregateOutputType | null
    _min: TimeFieldContraintMinAggregateOutputType | null
    _max: TimeFieldContraintMaxAggregateOutputType | null
  }

  type GetTimeFieldContraintGroupByPayload<T extends TimeFieldContraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeFieldContraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeFieldContraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeFieldContraintGroupByOutputType[P]>
            : GetScalarType<T[P], TimeFieldContraintGroupByOutputType[P]>
        }
      >
    >


  export type TimeFieldContraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeFieldContraint"]>

  export type TimeFieldContraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeFieldContraint"]>

  export type TimeFieldContraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeFieldContraint"]>

  export type TimeFieldContraintSelectScalar = {
    id?: boolean
    min_value?: boolean
    max_value?: boolean
    default_value?: boolean
    constraint_id?: boolean
  }

  export type TimeFieldContraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "min_value" | "max_value" | "default_value" | "constraint_id", ExtArgs["result"]["timeFieldContraint"]>
  export type TimeFieldContraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type TimeFieldContraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type TimeFieldContraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }

  export type $TimeFieldContraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeFieldContraint"
    objects: {
      constraint: Prisma.$DirectoryFieldConstraintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      min_value: string | null
      max_value: string | null
      default_value: string | null
      constraint_id: string
    }, ExtArgs["result"]["timeFieldContraint"]>
    composites: {}
  }

  type TimeFieldContraintGetPayload<S extends boolean | null | undefined | TimeFieldContraintDefaultArgs> = $Result.GetResult<Prisma.$TimeFieldContraintPayload, S>

  type TimeFieldContraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeFieldContraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeFieldContraintCountAggregateInputType | true
    }

  export interface TimeFieldContraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeFieldContraint'], meta: { name: 'TimeFieldContraint' } }
    /**
     * Find zero or one TimeFieldContraint that matches the filter.
     * @param {TimeFieldContraintFindUniqueArgs} args - Arguments to find a TimeFieldContraint
     * @example
     * // Get one TimeFieldContraint
     * const timeFieldContraint = await prisma.timeFieldContraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeFieldContraintFindUniqueArgs>(args: SelectSubset<T, TimeFieldContraintFindUniqueArgs<ExtArgs>>): Prisma__TimeFieldContraintClient<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeFieldContraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeFieldContraintFindUniqueOrThrowArgs} args - Arguments to find a TimeFieldContraint
     * @example
     * // Get one TimeFieldContraint
     * const timeFieldContraint = await prisma.timeFieldContraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeFieldContraintFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeFieldContraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeFieldContraintClient<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeFieldContraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFieldContraintFindFirstArgs} args - Arguments to find a TimeFieldContraint
     * @example
     * // Get one TimeFieldContraint
     * const timeFieldContraint = await prisma.timeFieldContraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeFieldContraintFindFirstArgs>(args?: SelectSubset<T, TimeFieldContraintFindFirstArgs<ExtArgs>>): Prisma__TimeFieldContraintClient<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeFieldContraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFieldContraintFindFirstOrThrowArgs} args - Arguments to find a TimeFieldContraint
     * @example
     * // Get one TimeFieldContraint
     * const timeFieldContraint = await prisma.timeFieldContraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeFieldContraintFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeFieldContraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeFieldContraintClient<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeFieldContraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFieldContraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeFieldContraints
     * const timeFieldContraints = await prisma.timeFieldContraint.findMany()
     * 
     * // Get first 10 TimeFieldContraints
     * const timeFieldContraints = await prisma.timeFieldContraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeFieldContraintWithIdOnly = await prisma.timeFieldContraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeFieldContraintFindManyArgs>(args?: SelectSubset<T, TimeFieldContraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeFieldContraint.
     * @param {TimeFieldContraintCreateArgs} args - Arguments to create a TimeFieldContraint.
     * @example
     * // Create one TimeFieldContraint
     * const TimeFieldContraint = await prisma.timeFieldContraint.create({
     *   data: {
     *     // ... data to create a TimeFieldContraint
     *   }
     * })
     * 
     */
    create<T extends TimeFieldContraintCreateArgs>(args: SelectSubset<T, TimeFieldContraintCreateArgs<ExtArgs>>): Prisma__TimeFieldContraintClient<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeFieldContraints.
     * @param {TimeFieldContraintCreateManyArgs} args - Arguments to create many TimeFieldContraints.
     * @example
     * // Create many TimeFieldContraints
     * const timeFieldContraint = await prisma.timeFieldContraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeFieldContraintCreateManyArgs>(args?: SelectSubset<T, TimeFieldContraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeFieldContraints and returns the data saved in the database.
     * @param {TimeFieldContraintCreateManyAndReturnArgs} args - Arguments to create many TimeFieldContraints.
     * @example
     * // Create many TimeFieldContraints
     * const timeFieldContraint = await prisma.timeFieldContraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeFieldContraints and only return the `id`
     * const timeFieldContraintWithIdOnly = await prisma.timeFieldContraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeFieldContraintCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeFieldContraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeFieldContraint.
     * @param {TimeFieldContraintDeleteArgs} args - Arguments to delete one TimeFieldContraint.
     * @example
     * // Delete one TimeFieldContraint
     * const TimeFieldContraint = await prisma.timeFieldContraint.delete({
     *   where: {
     *     // ... filter to delete one TimeFieldContraint
     *   }
     * })
     * 
     */
    delete<T extends TimeFieldContraintDeleteArgs>(args: SelectSubset<T, TimeFieldContraintDeleteArgs<ExtArgs>>): Prisma__TimeFieldContraintClient<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeFieldContraint.
     * @param {TimeFieldContraintUpdateArgs} args - Arguments to update one TimeFieldContraint.
     * @example
     * // Update one TimeFieldContraint
     * const timeFieldContraint = await prisma.timeFieldContraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeFieldContraintUpdateArgs>(args: SelectSubset<T, TimeFieldContraintUpdateArgs<ExtArgs>>): Prisma__TimeFieldContraintClient<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeFieldContraints.
     * @param {TimeFieldContraintDeleteManyArgs} args - Arguments to filter TimeFieldContraints to delete.
     * @example
     * // Delete a few TimeFieldContraints
     * const { count } = await prisma.timeFieldContraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeFieldContraintDeleteManyArgs>(args?: SelectSubset<T, TimeFieldContraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFieldContraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeFieldContraints
     * const timeFieldContraint = await prisma.timeFieldContraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeFieldContraintUpdateManyArgs>(args: SelectSubset<T, TimeFieldContraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeFieldContraints and returns the data updated in the database.
     * @param {TimeFieldContraintUpdateManyAndReturnArgs} args - Arguments to update many TimeFieldContraints.
     * @example
     * // Update many TimeFieldContraints
     * const timeFieldContraint = await prisma.timeFieldContraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeFieldContraints and only return the `id`
     * const timeFieldContraintWithIdOnly = await prisma.timeFieldContraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeFieldContraintUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeFieldContraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeFieldContraint.
     * @param {TimeFieldContraintUpsertArgs} args - Arguments to update or create a TimeFieldContraint.
     * @example
     * // Update or create a TimeFieldContraint
     * const timeFieldContraint = await prisma.timeFieldContraint.upsert({
     *   create: {
     *     // ... data to create a TimeFieldContraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeFieldContraint we want to update
     *   }
     * })
     */
    upsert<T extends TimeFieldContraintUpsertArgs>(args: SelectSubset<T, TimeFieldContraintUpsertArgs<ExtArgs>>): Prisma__TimeFieldContraintClient<$Result.GetResult<Prisma.$TimeFieldContraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFieldContraintCountArgs} args - Arguments to filter TimeFieldContraints to count.
     * @example
     * // Count the number of TimeFieldContraints
     * const count = await prisma.timeFieldContraint.count({
     *   where: {
     *     // ... the filter for the TimeFieldContraints we want to count
     *   }
     * })
    **/
    count<T extends TimeFieldContraintCountArgs>(
      args?: Subset<T, TimeFieldContraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeFieldContraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFieldContraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeFieldContraintAggregateArgs>(args: Subset<T, TimeFieldContraintAggregateArgs>): Prisma.PrismaPromise<GetTimeFieldContraintAggregateType<T>>

    /**
     * Group by TimeFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFieldContraintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeFieldContraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeFieldContraintGroupByArgs['orderBy'] }
        : { orderBy?: TimeFieldContraintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeFieldContraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeFieldContraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeFieldContraint model
   */
  readonly fields: TimeFieldContraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeFieldContraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeFieldContraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constraint<T extends DirectoryFieldConstraintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraintDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeFieldContraint model
   */
  interface TimeFieldContraintFieldRefs {
    readonly id: FieldRef<"TimeFieldContraint", 'String'>
    readonly min_value: FieldRef<"TimeFieldContraint", 'String'>
    readonly max_value: FieldRef<"TimeFieldContraint", 'String'>
    readonly default_value: FieldRef<"TimeFieldContraint", 'String'>
    readonly constraint_id: FieldRef<"TimeFieldContraint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TimeFieldContraint findUnique
   */
  export type TimeFieldContraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which TimeFieldContraint to fetch.
     */
    where: TimeFieldContraintWhereUniqueInput
  }

  /**
   * TimeFieldContraint findUniqueOrThrow
   */
  export type TimeFieldContraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which TimeFieldContraint to fetch.
     */
    where: TimeFieldContraintWhereUniqueInput
  }

  /**
   * TimeFieldContraint findFirst
   */
  export type TimeFieldContraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which TimeFieldContraint to fetch.
     */
    where?: TimeFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeFieldContraints to fetch.
     */
    orderBy?: TimeFieldContraintOrderByWithRelationInput | TimeFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeFieldContraints.
     */
    cursor?: TimeFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeFieldContraints.
     */
    distinct?: TimeFieldContraintScalarFieldEnum | TimeFieldContraintScalarFieldEnum[]
  }

  /**
   * TimeFieldContraint findFirstOrThrow
   */
  export type TimeFieldContraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which TimeFieldContraint to fetch.
     */
    where?: TimeFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeFieldContraints to fetch.
     */
    orderBy?: TimeFieldContraintOrderByWithRelationInput | TimeFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeFieldContraints.
     */
    cursor?: TimeFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeFieldContraints.
     */
    distinct?: TimeFieldContraintScalarFieldEnum | TimeFieldContraintScalarFieldEnum[]
  }

  /**
   * TimeFieldContraint findMany
   */
  export type TimeFieldContraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which TimeFieldContraints to fetch.
     */
    where?: TimeFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeFieldContraints to fetch.
     */
    orderBy?: TimeFieldContraintOrderByWithRelationInput | TimeFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeFieldContraints.
     */
    cursor?: TimeFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeFieldContraints.
     */
    skip?: number
    distinct?: TimeFieldContraintScalarFieldEnum | TimeFieldContraintScalarFieldEnum[]
  }

  /**
   * TimeFieldContraint create
   */
  export type TimeFieldContraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeFieldContraint.
     */
    data: XOR<TimeFieldContraintCreateInput, TimeFieldContraintUncheckedCreateInput>
  }

  /**
   * TimeFieldContraint createMany
   */
  export type TimeFieldContraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeFieldContraints.
     */
    data: TimeFieldContraintCreateManyInput | TimeFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeFieldContraint createManyAndReturn
   */
  export type TimeFieldContraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to create many TimeFieldContraints.
     */
    data: TimeFieldContraintCreateManyInput | TimeFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeFieldContraint update
   */
  export type TimeFieldContraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeFieldContraint.
     */
    data: XOR<TimeFieldContraintUpdateInput, TimeFieldContraintUncheckedUpdateInput>
    /**
     * Choose, which TimeFieldContraint to update.
     */
    where: TimeFieldContraintWhereUniqueInput
  }

  /**
   * TimeFieldContraint updateMany
   */
  export type TimeFieldContraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeFieldContraints.
     */
    data: XOR<TimeFieldContraintUpdateManyMutationInput, TimeFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which TimeFieldContraints to update
     */
    where?: TimeFieldContraintWhereInput
    /**
     * Limit how many TimeFieldContraints to update.
     */
    limit?: number
  }

  /**
   * TimeFieldContraint updateManyAndReturn
   */
  export type TimeFieldContraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to update TimeFieldContraints.
     */
    data: XOR<TimeFieldContraintUpdateManyMutationInput, TimeFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which TimeFieldContraints to update
     */
    where?: TimeFieldContraintWhereInput
    /**
     * Limit how many TimeFieldContraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeFieldContraint upsert
   */
  export type TimeFieldContraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeFieldContraint to update in case it exists.
     */
    where: TimeFieldContraintWhereUniqueInput
    /**
     * In case the TimeFieldContraint found by the `where` argument doesn't exist, create a new TimeFieldContraint with this data.
     */
    create: XOR<TimeFieldContraintCreateInput, TimeFieldContraintUncheckedCreateInput>
    /**
     * In case the TimeFieldContraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeFieldContraintUpdateInput, TimeFieldContraintUncheckedUpdateInput>
  }

  /**
   * TimeFieldContraint delete
   */
  export type TimeFieldContraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
    /**
     * Filter which TimeFieldContraint to delete.
     */
    where: TimeFieldContraintWhereUniqueInput
  }

  /**
   * TimeFieldContraint deleteMany
   */
  export type TimeFieldContraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeFieldContraints to delete
     */
    where?: TimeFieldContraintWhereInput
    /**
     * Limit how many TimeFieldContraints to delete.
     */
    limit?: number
  }

  /**
   * TimeFieldContraint without action
   */
  export type TimeFieldContraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeFieldContraint
     */
    select?: TimeFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeFieldContraint
     */
    omit?: TimeFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeFieldContraintInclude<ExtArgs> | null
  }


  /**
   * Model PointFieldContraint
   */

  export type AggregatePointFieldContraint = {
    _count: PointFieldContraintCountAggregateOutputType | null
    _min: PointFieldContraintMinAggregateOutputType | null
    _max: PointFieldContraintMaxAggregateOutputType | null
  }

  export type PointFieldContraintMinAggregateOutputType = {
    id: string | null
    constraint_id: string | null
  }

  export type PointFieldContraintMaxAggregateOutputType = {
    id: string | null
    constraint_id: string | null
  }

  export type PointFieldContraintCountAggregateOutputType = {
    id: number
    constraint_id: number
    _all: number
  }


  export type PointFieldContraintMinAggregateInputType = {
    id?: true
    constraint_id?: true
  }

  export type PointFieldContraintMaxAggregateInputType = {
    id?: true
    constraint_id?: true
  }

  export type PointFieldContraintCountAggregateInputType = {
    id?: true
    constraint_id?: true
    _all?: true
  }

  export type PointFieldContraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointFieldContraint to aggregate.
     */
    where?: PointFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointFieldContraints to fetch.
     */
    orderBy?: PointFieldContraintOrderByWithRelationInput | PointFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointFieldContraints
    **/
    _count?: true | PointFieldContraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointFieldContraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointFieldContraintMaxAggregateInputType
  }

  export type GetPointFieldContraintAggregateType<T extends PointFieldContraintAggregateArgs> = {
        [P in keyof T & keyof AggregatePointFieldContraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointFieldContraint[P]>
      : GetScalarType<T[P], AggregatePointFieldContraint[P]>
  }




  export type PointFieldContraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointFieldContraintWhereInput
    orderBy?: PointFieldContraintOrderByWithAggregationInput | PointFieldContraintOrderByWithAggregationInput[]
    by: PointFieldContraintScalarFieldEnum[] | PointFieldContraintScalarFieldEnum
    having?: PointFieldContraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointFieldContraintCountAggregateInputType | true
    _min?: PointFieldContraintMinAggregateInputType
    _max?: PointFieldContraintMaxAggregateInputType
  }

  export type PointFieldContraintGroupByOutputType = {
    id: string
    constraint_id: string
    _count: PointFieldContraintCountAggregateOutputType | null
    _min: PointFieldContraintMinAggregateOutputType | null
    _max: PointFieldContraintMaxAggregateOutputType | null
  }

  type GetPointFieldContraintGroupByPayload<T extends PointFieldContraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointFieldContraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointFieldContraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointFieldContraintGroupByOutputType[P]>
            : GetScalarType<T[P], PointFieldContraintGroupByOutputType[P]>
        }
      >
    >


  export type PointFieldContraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointFieldContraint"]>

  export type PointFieldContraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointFieldContraint"]>

  export type PointFieldContraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointFieldContraint"]>

  export type PointFieldContraintSelectScalar = {
    id?: boolean
    constraint_id?: boolean
  }

  export type PointFieldContraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "constraint_id", ExtArgs["result"]["pointFieldContraint"]>
  export type PointFieldContraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type PointFieldContraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type PointFieldContraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }

  export type $PointFieldContraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointFieldContraint"
    objects: {
      constraint: Prisma.$DirectoryFieldConstraintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      constraint_id: string
    }, ExtArgs["result"]["pointFieldContraint"]>
    composites: {}
  }

  type PointFieldContraintGetPayload<S extends boolean | null | undefined | PointFieldContraintDefaultArgs> = $Result.GetResult<Prisma.$PointFieldContraintPayload, S>

  type PointFieldContraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointFieldContraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointFieldContraintCountAggregateInputType | true
    }

  export interface PointFieldContraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointFieldContraint'], meta: { name: 'PointFieldContraint' } }
    /**
     * Find zero or one PointFieldContraint that matches the filter.
     * @param {PointFieldContraintFindUniqueArgs} args - Arguments to find a PointFieldContraint
     * @example
     * // Get one PointFieldContraint
     * const pointFieldContraint = await prisma.pointFieldContraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFieldContraintFindUniqueArgs>(args: SelectSubset<T, PointFieldContraintFindUniqueArgs<ExtArgs>>): Prisma__PointFieldContraintClient<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointFieldContraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointFieldContraintFindUniqueOrThrowArgs} args - Arguments to find a PointFieldContraint
     * @example
     * // Get one PointFieldContraint
     * const pointFieldContraint = await prisma.pointFieldContraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFieldContraintFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFieldContraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointFieldContraintClient<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointFieldContraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFieldContraintFindFirstArgs} args - Arguments to find a PointFieldContraint
     * @example
     * // Get one PointFieldContraint
     * const pointFieldContraint = await prisma.pointFieldContraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFieldContraintFindFirstArgs>(args?: SelectSubset<T, PointFieldContraintFindFirstArgs<ExtArgs>>): Prisma__PointFieldContraintClient<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointFieldContraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFieldContraintFindFirstOrThrowArgs} args - Arguments to find a PointFieldContraint
     * @example
     * // Get one PointFieldContraint
     * const pointFieldContraint = await prisma.pointFieldContraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFieldContraintFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFieldContraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointFieldContraintClient<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointFieldContraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFieldContraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointFieldContraints
     * const pointFieldContraints = await prisma.pointFieldContraint.findMany()
     * 
     * // Get first 10 PointFieldContraints
     * const pointFieldContraints = await prisma.pointFieldContraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointFieldContraintWithIdOnly = await prisma.pointFieldContraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointFieldContraintFindManyArgs>(args?: SelectSubset<T, PointFieldContraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointFieldContraint.
     * @param {PointFieldContraintCreateArgs} args - Arguments to create a PointFieldContraint.
     * @example
     * // Create one PointFieldContraint
     * const PointFieldContraint = await prisma.pointFieldContraint.create({
     *   data: {
     *     // ... data to create a PointFieldContraint
     *   }
     * })
     * 
     */
    create<T extends PointFieldContraintCreateArgs>(args: SelectSubset<T, PointFieldContraintCreateArgs<ExtArgs>>): Prisma__PointFieldContraintClient<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointFieldContraints.
     * @param {PointFieldContraintCreateManyArgs} args - Arguments to create many PointFieldContraints.
     * @example
     * // Create many PointFieldContraints
     * const pointFieldContraint = await prisma.pointFieldContraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointFieldContraintCreateManyArgs>(args?: SelectSubset<T, PointFieldContraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointFieldContraints and returns the data saved in the database.
     * @param {PointFieldContraintCreateManyAndReturnArgs} args - Arguments to create many PointFieldContraints.
     * @example
     * // Create many PointFieldContraints
     * const pointFieldContraint = await prisma.pointFieldContraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointFieldContraints and only return the `id`
     * const pointFieldContraintWithIdOnly = await prisma.pointFieldContraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointFieldContraintCreateManyAndReturnArgs>(args?: SelectSubset<T, PointFieldContraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PointFieldContraint.
     * @param {PointFieldContraintDeleteArgs} args - Arguments to delete one PointFieldContraint.
     * @example
     * // Delete one PointFieldContraint
     * const PointFieldContraint = await prisma.pointFieldContraint.delete({
     *   where: {
     *     // ... filter to delete one PointFieldContraint
     *   }
     * })
     * 
     */
    delete<T extends PointFieldContraintDeleteArgs>(args: SelectSubset<T, PointFieldContraintDeleteArgs<ExtArgs>>): Prisma__PointFieldContraintClient<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointFieldContraint.
     * @param {PointFieldContraintUpdateArgs} args - Arguments to update one PointFieldContraint.
     * @example
     * // Update one PointFieldContraint
     * const pointFieldContraint = await prisma.pointFieldContraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointFieldContraintUpdateArgs>(args: SelectSubset<T, PointFieldContraintUpdateArgs<ExtArgs>>): Prisma__PointFieldContraintClient<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointFieldContraints.
     * @param {PointFieldContraintDeleteManyArgs} args - Arguments to filter PointFieldContraints to delete.
     * @example
     * // Delete a few PointFieldContraints
     * const { count } = await prisma.pointFieldContraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointFieldContraintDeleteManyArgs>(args?: SelectSubset<T, PointFieldContraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFieldContraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointFieldContraints
     * const pointFieldContraint = await prisma.pointFieldContraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointFieldContraintUpdateManyArgs>(args: SelectSubset<T, PointFieldContraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointFieldContraints and returns the data updated in the database.
     * @param {PointFieldContraintUpdateManyAndReturnArgs} args - Arguments to update many PointFieldContraints.
     * @example
     * // Update many PointFieldContraints
     * const pointFieldContraint = await prisma.pointFieldContraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PointFieldContraints and only return the `id`
     * const pointFieldContraintWithIdOnly = await prisma.pointFieldContraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PointFieldContraintUpdateManyAndReturnArgs>(args: SelectSubset<T, PointFieldContraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PointFieldContraint.
     * @param {PointFieldContraintUpsertArgs} args - Arguments to update or create a PointFieldContraint.
     * @example
     * // Update or create a PointFieldContraint
     * const pointFieldContraint = await prisma.pointFieldContraint.upsert({
     *   create: {
     *     // ... data to create a PointFieldContraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointFieldContraint we want to update
     *   }
     * })
     */
    upsert<T extends PointFieldContraintUpsertArgs>(args: SelectSubset<T, PointFieldContraintUpsertArgs<ExtArgs>>): Prisma__PointFieldContraintClient<$Result.GetResult<Prisma.$PointFieldContraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFieldContraintCountArgs} args - Arguments to filter PointFieldContraints to count.
     * @example
     * // Count the number of PointFieldContraints
     * const count = await prisma.pointFieldContraint.count({
     *   where: {
     *     // ... the filter for the PointFieldContraints we want to count
     *   }
     * })
    **/
    count<T extends PointFieldContraintCountArgs>(
      args?: Subset<T, PointFieldContraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointFieldContraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFieldContraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointFieldContraintAggregateArgs>(args: Subset<T, PointFieldContraintAggregateArgs>): Prisma.PrismaPromise<GetPointFieldContraintAggregateType<T>>

    /**
     * Group by PointFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFieldContraintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointFieldContraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointFieldContraintGroupByArgs['orderBy'] }
        : { orderBy?: PointFieldContraintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointFieldContraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointFieldContraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointFieldContraint model
   */
  readonly fields: PointFieldContraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointFieldContraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointFieldContraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constraint<T extends DirectoryFieldConstraintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraintDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PointFieldContraint model
   */
  interface PointFieldContraintFieldRefs {
    readonly id: FieldRef<"PointFieldContraint", 'String'>
    readonly constraint_id: FieldRef<"PointFieldContraint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PointFieldContraint findUnique
   */
  export type PointFieldContraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PointFieldContraint to fetch.
     */
    where: PointFieldContraintWhereUniqueInput
  }

  /**
   * PointFieldContraint findUniqueOrThrow
   */
  export type PointFieldContraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PointFieldContraint to fetch.
     */
    where: PointFieldContraintWhereUniqueInput
  }

  /**
   * PointFieldContraint findFirst
   */
  export type PointFieldContraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PointFieldContraint to fetch.
     */
    where?: PointFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointFieldContraints to fetch.
     */
    orderBy?: PointFieldContraintOrderByWithRelationInput | PointFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointFieldContraints.
     */
    cursor?: PointFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointFieldContraints.
     */
    distinct?: PointFieldContraintScalarFieldEnum | PointFieldContraintScalarFieldEnum[]
  }

  /**
   * PointFieldContraint findFirstOrThrow
   */
  export type PointFieldContraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PointFieldContraint to fetch.
     */
    where?: PointFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointFieldContraints to fetch.
     */
    orderBy?: PointFieldContraintOrderByWithRelationInput | PointFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointFieldContraints.
     */
    cursor?: PointFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointFieldContraints.
     */
    distinct?: PointFieldContraintScalarFieldEnum | PointFieldContraintScalarFieldEnum[]
  }

  /**
   * PointFieldContraint findMany
   */
  export type PointFieldContraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PointFieldContraints to fetch.
     */
    where?: PointFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointFieldContraints to fetch.
     */
    orderBy?: PointFieldContraintOrderByWithRelationInput | PointFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointFieldContraints.
     */
    cursor?: PointFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointFieldContraints.
     */
    skip?: number
    distinct?: PointFieldContraintScalarFieldEnum | PointFieldContraintScalarFieldEnum[]
  }

  /**
   * PointFieldContraint create
   */
  export type PointFieldContraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to create a PointFieldContraint.
     */
    data: XOR<PointFieldContraintCreateInput, PointFieldContraintUncheckedCreateInput>
  }

  /**
   * PointFieldContraint createMany
   */
  export type PointFieldContraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointFieldContraints.
     */
    data: PointFieldContraintCreateManyInput | PointFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointFieldContraint createManyAndReturn
   */
  export type PointFieldContraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to create many PointFieldContraints.
     */
    data: PointFieldContraintCreateManyInput | PointFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointFieldContraint update
   */
  export type PointFieldContraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to update a PointFieldContraint.
     */
    data: XOR<PointFieldContraintUpdateInput, PointFieldContraintUncheckedUpdateInput>
    /**
     * Choose, which PointFieldContraint to update.
     */
    where: PointFieldContraintWhereUniqueInput
  }

  /**
   * PointFieldContraint updateMany
   */
  export type PointFieldContraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointFieldContraints.
     */
    data: XOR<PointFieldContraintUpdateManyMutationInput, PointFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which PointFieldContraints to update
     */
    where?: PointFieldContraintWhereInput
    /**
     * Limit how many PointFieldContraints to update.
     */
    limit?: number
  }

  /**
   * PointFieldContraint updateManyAndReturn
   */
  export type PointFieldContraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to update PointFieldContraints.
     */
    data: XOR<PointFieldContraintUpdateManyMutationInput, PointFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which PointFieldContraints to update
     */
    where?: PointFieldContraintWhereInput
    /**
     * Limit how many PointFieldContraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointFieldContraint upsert
   */
  export type PointFieldContraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    /**
     * The filter to search for the PointFieldContraint to update in case it exists.
     */
    where: PointFieldContraintWhereUniqueInput
    /**
     * In case the PointFieldContraint found by the `where` argument doesn't exist, create a new PointFieldContraint with this data.
     */
    create: XOR<PointFieldContraintCreateInput, PointFieldContraintUncheckedCreateInput>
    /**
     * In case the PointFieldContraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointFieldContraintUpdateInput, PointFieldContraintUncheckedUpdateInput>
  }

  /**
   * PointFieldContraint delete
   */
  export type PointFieldContraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
    /**
     * Filter which PointFieldContraint to delete.
     */
    where: PointFieldContraintWhereUniqueInput
  }

  /**
   * PointFieldContraint deleteMany
   */
  export type PointFieldContraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointFieldContraints to delete
     */
    where?: PointFieldContraintWhereInput
    /**
     * Limit how many PointFieldContraints to delete.
     */
    limit?: number
  }

  /**
   * PointFieldContraint without action
   */
  export type PointFieldContraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointFieldContraint
     */
    select?: PointFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointFieldContraint
     */
    omit?: PointFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointFieldContraintInclude<ExtArgs> | null
  }


  /**
   * Model LineStringFieldContraint
   */

  export type AggregateLineStringFieldContraint = {
    _count: LineStringFieldContraintCountAggregateOutputType | null
    _min: LineStringFieldContraintMinAggregateOutputType | null
    _max: LineStringFieldContraintMaxAggregateOutputType | null
  }

  export type LineStringFieldContraintMinAggregateOutputType = {
    id: string | null
    constraint_id: string | null
  }

  export type LineStringFieldContraintMaxAggregateOutputType = {
    id: string | null
    constraint_id: string | null
  }

  export type LineStringFieldContraintCountAggregateOutputType = {
    id: number
    constraint_id: number
    _all: number
  }


  export type LineStringFieldContraintMinAggregateInputType = {
    id?: true
    constraint_id?: true
  }

  export type LineStringFieldContraintMaxAggregateInputType = {
    id?: true
    constraint_id?: true
  }

  export type LineStringFieldContraintCountAggregateInputType = {
    id?: true
    constraint_id?: true
    _all?: true
  }

  export type LineStringFieldContraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineStringFieldContraint to aggregate.
     */
    where?: LineStringFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineStringFieldContraints to fetch.
     */
    orderBy?: LineStringFieldContraintOrderByWithRelationInput | LineStringFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineStringFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineStringFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineStringFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineStringFieldContraints
    **/
    _count?: true | LineStringFieldContraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineStringFieldContraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineStringFieldContraintMaxAggregateInputType
  }

  export type GetLineStringFieldContraintAggregateType<T extends LineStringFieldContraintAggregateArgs> = {
        [P in keyof T & keyof AggregateLineStringFieldContraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineStringFieldContraint[P]>
      : GetScalarType<T[P], AggregateLineStringFieldContraint[P]>
  }




  export type LineStringFieldContraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineStringFieldContraintWhereInput
    orderBy?: LineStringFieldContraintOrderByWithAggregationInput | LineStringFieldContraintOrderByWithAggregationInput[]
    by: LineStringFieldContraintScalarFieldEnum[] | LineStringFieldContraintScalarFieldEnum
    having?: LineStringFieldContraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineStringFieldContraintCountAggregateInputType | true
    _min?: LineStringFieldContraintMinAggregateInputType
    _max?: LineStringFieldContraintMaxAggregateInputType
  }

  export type LineStringFieldContraintGroupByOutputType = {
    id: string
    constraint_id: string
    _count: LineStringFieldContraintCountAggregateOutputType | null
    _min: LineStringFieldContraintMinAggregateOutputType | null
    _max: LineStringFieldContraintMaxAggregateOutputType | null
  }

  type GetLineStringFieldContraintGroupByPayload<T extends LineStringFieldContraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineStringFieldContraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineStringFieldContraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineStringFieldContraintGroupByOutputType[P]>
            : GetScalarType<T[P], LineStringFieldContraintGroupByOutputType[P]>
        }
      >
    >


  export type LineStringFieldContraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineStringFieldContraint"]>

  export type LineStringFieldContraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineStringFieldContraint"]>

  export type LineStringFieldContraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineStringFieldContraint"]>

  export type LineStringFieldContraintSelectScalar = {
    id?: boolean
    constraint_id?: boolean
  }

  export type LineStringFieldContraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "constraint_id", ExtArgs["result"]["lineStringFieldContraint"]>
  export type LineStringFieldContraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type LineStringFieldContraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type LineStringFieldContraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }

  export type $LineStringFieldContraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LineStringFieldContraint"
    objects: {
      constraint: Prisma.$DirectoryFieldConstraintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      constraint_id: string
    }, ExtArgs["result"]["lineStringFieldContraint"]>
    composites: {}
  }

  type LineStringFieldContraintGetPayload<S extends boolean | null | undefined | LineStringFieldContraintDefaultArgs> = $Result.GetResult<Prisma.$LineStringFieldContraintPayload, S>

  type LineStringFieldContraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineStringFieldContraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineStringFieldContraintCountAggregateInputType | true
    }

  export interface LineStringFieldContraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LineStringFieldContraint'], meta: { name: 'LineStringFieldContraint' } }
    /**
     * Find zero or one LineStringFieldContraint that matches the filter.
     * @param {LineStringFieldContraintFindUniqueArgs} args - Arguments to find a LineStringFieldContraint
     * @example
     * // Get one LineStringFieldContraint
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineStringFieldContraintFindUniqueArgs>(args: SelectSubset<T, LineStringFieldContraintFindUniqueArgs<ExtArgs>>): Prisma__LineStringFieldContraintClient<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LineStringFieldContraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineStringFieldContraintFindUniqueOrThrowArgs} args - Arguments to find a LineStringFieldContraint
     * @example
     * // Get one LineStringFieldContraint
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineStringFieldContraintFindUniqueOrThrowArgs>(args: SelectSubset<T, LineStringFieldContraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineStringFieldContraintClient<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineStringFieldContraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineStringFieldContraintFindFirstArgs} args - Arguments to find a LineStringFieldContraint
     * @example
     * // Get one LineStringFieldContraint
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineStringFieldContraintFindFirstArgs>(args?: SelectSubset<T, LineStringFieldContraintFindFirstArgs<ExtArgs>>): Prisma__LineStringFieldContraintClient<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineStringFieldContraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineStringFieldContraintFindFirstOrThrowArgs} args - Arguments to find a LineStringFieldContraint
     * @example
     * // Get one LineStringFieldContraint
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineStringFieldContraintFindFirstOrThrowArgs>(args?: SelectSubset<T, LineStringFieldContraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineStringFieldContraintClient<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LineStringFieldContraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineStringFieldContraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineStringFieldContraints
     * const lineStringFieldContraints = await prisma.lineStringFieldContraint.findMany()
     * 
     * // Get first 10 LineStringFieldContraints
     * const lineStringFieldContraints = await prisma.lineStringFieldContraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineStringFieldContraintWithIdOnly = await prisma.lineStringFieldContraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineStringFieldContraintFindManyArgs>(args?: SelectSubset<T, LineStringFieldContraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LineStringFieldContraint.
     * @param {LineStringFieldContraintCreateArgs} args - Arguments to create a LineStringFieldContraint.
     * @example
     * // Create one LineStringFieldContraint
     * const LineStringFieldContraint = await prisma.lineStringFieldContraint.create({
     *   data: {
     *     // ... data to create a LineStringFieldContraint
     *   }
     * })
     * 
     */
    create<T extends LineStringFieldContraintCreateArgs>(args: SelectSubset<T, LineStringFieldContraintCreateArgs<ExtArgs>>): Prisma__LineStringFieldContraintClient<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LineStringFieldContraints.
     * @param {LineStringFieldContraintCreateManyArgs} args - Arguments to create many LineStringFieldContraints.
     * @example
     * // Create many LineStringFieldContraints
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineStringFieldContraintCreateManyArgs>(args?: SelectSubset<T, LineStringFieldContraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LineStringFieldContraints and returns the data saved in the database.
     * @param {LineStringFieldContraintCreateManyAndReturnArgs} args - Arguments to create many LineStringFieldContraints.
     * @example
     * // Create many LineStringFieldContraints
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LineStringFieldContraints and only return the `id`
     * const lineStringFieldContraintWithIdOnly = await prisma.lineStringFieldContraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LineStringFieldContraintCreateManyAndReturnArgs>(args?: SelectSubset<T, LineStringFieldContraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LineStringFieldContraint.
     * @param {LineStringFieldContraintDeleteArgs} args - Arguments to delete one LineStringFieldContraint.
     * @example
     * // Delete one LineStringFieldContraint
     * const LineStringFieldContraint = await prisma.lineStringFieldContraint.delete({
     *   where: {
     *     // ... filter to delete one LineStringFieldContraint
     *   }
     * })
     * 
     */
    delete<T extends LineStringFieldContraintDeleteArgs>(args: SelectSubset<T, LineStringFieldContraintDeleteArgs<ExtArgs>>): Prisma__LineStringFieldContraintClient<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LineStringFieldContraint.
     * @param {LineStringFieldContraintUpdateArgs} args - Arguments to update one LineStringFieldContraint.
     * @example
     * // Update one LineStringFieldContraint
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineStringFieldContraintUpdateArgs>(args: SelectSubset<T, LineStringFieldContraintUpdateArgs<ExtArgs>>): Prisma__LineStringFieldContraintClient<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LineStringFieldContraints.
     * @param {LineStringFieldContraintDeleteManyArgs} args - Arguments to filter LineStringFieldContraints to delete.
     * @example
     * // Delete a few LineStringFieldContraints
     * const { count } = await prisma.lineStringFieldContraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineStringFieldContraintDeleteManyArgs>(args?: SelectSubset<T, LineStringFieldContraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineStringFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineStringFieldContraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineStringFieldContraints
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineStringFieldContraintUpdateManyArgs>(args: SelectSubset<T, LineStringFieldContraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineStringFieldContraints and returns the data updated in the database.
     * @param {LineStringFieldContraintUpdateManyAndReturnArgs} args - Arguments to update many LineStringFieldContraints.
     * @example
     * // Update many LineStringFieldContraints
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LineStringFieldContraints and only return the `id`
     * const lineStringFieldContraintWithIdOnly = await prisma.lineStringFieldContraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LineStringFieldContraintUpdateManyAndReturnArgs>(args: SelectSubset<T, LineStringFieldContraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LineStringFieldContraint.
     * @param {LineStringFieldContraintUpsertArgs} args - Arguments to update or create a LineStringFieldContraint.
     * @example
     * // Update or create a LineStringFieldContraint
     * const lineStringFieldContraint = await prisma.lineStringFieldContraint.upsert({
     *   create: {
     *     // ... data to create a LineStringFieldContraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineStringFieldContraint we want to update
     *   }
     * })
     */
    upsert<T extends LineStringFieldContraintUpsertArgs>(args: SelectSubset<T, LineStringFieldContraintUpsertArgs<ExtArgs>>): Prisma__LineStringFieldContraintClient<$Result.GetResult<Prisma.$LineStringFieldContraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LineStringFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineStringFieldContraintCountArgs} args - Arguments to filter LineStringFieldContraints to count.
     * @example
     * // Count the number of LineStringFieldContraints
     * const count = await prisma.lineStringFieldContraint.count({
     *   where: {
     *     // ... the filter for the LineStringFieldContraints we want to count
     *   }
     * })
    **/
    count<T extends LineStringFieldContraintCountArgs>(
      args?: Subset<T, LineStringFieldContraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineStringFieldContraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineStringFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineStringFieldContraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LineStringFieldContraintAggregateArgs>(args: Subset<T, LineStringFieldContraintAggregateArgs>): Prisma.PrismaPromise<GetLineStringFieldContraintAggregateType<T>>

    /**
     * Group by LineStringFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineStringFieldContraintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LineStringFieldContraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineStringFieldContraintGroupByArgs['orderBy'] }
        : { orderBy?: LineStringFieldContraintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LineStringFieldContraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineStringFieldContraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LineStringFieldContraint model
   */
  readonly fields: LineStringFieldContraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LineStringFieldContraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineStringFieldContraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constraint<T extends DirectoryFieldConstraintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraintDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LineStringFieldContraint model
   */
  interface LineStringFieldContraintFieldRefs {
    readonly id: FieldRef<"LineStringFieldContraint", 'String'>
    readonly constraint_id: FieldRef<"LineStringFieldContraint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LineStringFieldContraint findUnique
   */
  export type LineStringFieldContraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which LineStringFieldContraint to fetch.
     */
    where: LineStringFieldContraintWhereUniqueInput
  }

  /**
   * LineStringFieldContraint findUniqueOrThrow
   */
  export type LineStringFieldContraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which LineStringFieldContraint to fetch.
     */
    where: LineStringFieldContraintWhereUniqueInput
  }

  /**
   * LineStringFieldContraint findFirst
   */
  export type LineStringFieldContraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which LineStringFieldContraint to fetch.
     */
    where?: LineStringFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineStringFieldContraints to fetch.
     */
    orderBy?: LineStringFieldContraintOrderByWithRelationInput | LineStringFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineStringFieldContraints.
     */
    cursor?: LineStringFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineStringFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineStringFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineStringFieldContraints.
     */
    distinct?: LineStringFieldContraintScalarFieldEnum | LineStringFieldContraintScalarFieldEnum[]
  }

  /**
   * LineStringFieldContraint findFirstOrThrow
   */
  export type LineStringFieldContraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which LineStringFieldContraint to fetch.
     */
    where?: LineStringFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineStringFieldContraints to fetch.
     */
    orderBy?: LineStringFieldContraintOrderByWithRelationInput | LineStringFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineStringFieldContraints.
     */
    cursor?: LineStringFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineStringFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineStringFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineStringFieldContraints.
     */
    distinct?: LineStringFieldContraintScalarFieldEnum | LineStringFieldContraintScalarFieldEnum[]
  }

  /**
   * LineStringFieldContraint findMany
   */
  export type LineStringFieldContraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which LineStringFieldContraints to fetch.
     */
    where?: LineStringFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineStringFieldContraints to fetch.
     */
    orderBy?: LineStringFieldContraintOrderByWithRelationInput | LineStringFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineStringFieldContraints.
     */
    cursor?: LineStringFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineStringFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineStringFieldContraints.
     */
    skip?: number
    distinct?: LineStringFieldContraintScalarFieldEnum | LineStringFieldContraintScalarFieldEnum[]
  }

  /**
   * LineStringFieldContraint create
   */
  export type LineStringFieldContraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to create a LineStringFieldContraint.
     */
    data: XOR<LineStringFieldContraintCreateInput, LineStringFieldContraintUncheckedCreateInput>
  }

  /**
   * LineStringFieldContraint createMany
   */
  export type LineStringFieldContraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LineStringFieldContraints.
     */
    data: LineStringFieldContraintCreateManyInput | LineStringFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LineStringFieldContraint createManyAndReturn
   */
  export type LineStringFieldContraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to create many LineStringFieldContraints.
     */
    data: LineStringFieldContraintCreateManyInput | LineStringFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LineStringFieldContraint update
   */
  export type LineStringFieldContraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to update a LineStringFieldContraint.
     */
    data: XOR<LineStringFieldContraintUpdateInput, LineStringFieldContraintUncheckedUpdateInput>
    /**
     * Choose, which LineStringFieldContraint to update.
     */
    where: LineStringFieldContraintWhereUniqueInput
  }

  /**
   * LineStringFieldContraint updateMany
   */
  export type LineStringFieldContraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LineStringFieldContraints.
     */
    data: XOR<LineStringFieldContraintUpdateManyMutationInput, LineStringFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which LineStringFieldContraints to update
     */
    where?: LineStringFieldContraintWhereInput
    /**
     * Limit how many LineStringFieldContraints to update.
     */
    limit?: number
  }

  /**
   * LineStringFieldContraint updateManyAndReturn
   */
  export type LineStringFieldContraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to update LineStringFieldContraints.
     */
    data: XOR<LineStringFieldContraintUpdateManyMutationInput, LineStringFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which LineStringFieldContraints to update
     */
    where?: LineStringFieldContraintWhereInput
    /**
     * Limit how many LineStringFieldContraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LineStringFieldContraint upsert
   */
  export type LineStringFieldContraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    /**
     * The filter to search for the LineStringFieldContraint to update in case it exists.
     */
    where: LineStringFieldContraintWhereUniqueInput
    /**
     * In case the LineStringFieldContraint found by the `where` argument doesn't exist, create a new LineStringFieldContraint with this data.
     */
    create: XOR<LineStringFieldContraintCreateInput, LineStringFieldContraintUncheckedCreateInput>
    /**
     * In case the LineStringFieldContraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineStringFieldContraintUpdateInput, LineStringFieldContraintUncheckedUpdateInput>
  }

  /**
   * LineStringFieldContraint delete
   */
  export type LineStringFieldContraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
    /**
     * Filter which LineStringFieldContraint to delete.
     */
    where: LineStringFieldContraintWhereUniqueInput
  }

  /**
   * LineStringFieldContraint deleteMany
   */
  export type LineStringFieldContraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineStringFieldContraints to delete
     */
    where?: LineStringFieldContraintWhereInput
    /**
     * Limit how many LineStringFieldContraints to delete.
     */
    limit?: number
  }

  /**
   * LineStringFieldContraint without action
   */
  export type LineStringFieldContraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineStringFieldContraint
     */
    select?: LineStringFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineStringFieldContraint
     */
    omit?: LineStringFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineStringFieldContraintInclude<ExtArgs> | null
  }


  /**
   * Model PolygonFieldContraint
   */

  export type AggregatePolygonFieldContraint = {
    _count: PolygonFieldContraintCountAggregateOutputType | null
    _min: PolygonFieldContraintMinAggregateOutputType | null
    _max: PolygonFieldContraintMaxAggregateOutputType | null
  }

  export type PolygonFieldContraintMinAggregateOutputType = {
    id: string | null
    constraint_id: string | null
  }

  export type PolygonFieldContraintMaxAggregateOutputType = {
    id: string | null
    constraint_id: string | null
  }

  export type PolygonFieldContraintCountAggregateOutputType = {
    id: number
    constraint_id: number
    _all: number
  }


  export type PolygonFieldContraintMinAggregateInputType = {
    id?: true
    constraint_id?: true
  }

  export type PolygonFieldContraintMaxAggregateInputType = {
    id?: true
    constraint_id?: true
  }

  export type PolygonFieldContraintCountAggregateInputType = {
    id?: true
    constraint_id?: true
    _all?: true
  }

  export type PolygonFieldContraintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolygonFieldContraint to aggregate.
     */
    where?: PolygonFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolygonFieldContraints to fetch.
     */
    orderBy?: PolygonFieldContraintOrderByWithRelationInput | PolygonFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolygonFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolygonFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolygonFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolygonFieldContraints
    **/
    _count?: true | PolygonFieldContraintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolygonFieldContraintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolygonFieldContraintMaxAggregateInputType
  }

  export type GetPolygonFieldContraintAggregateType<T extends PolygonFieldContraintAggregateArgs> = {
        [P in keyof T & keyof AggregatePolygonFieldContraint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolygonFieldContraint[P]>
      : GetScalarType<T[P], AggregatePolygonFieldContraint[P]>
  }




  export type PolygonFieldContraintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolygonFieldContraintWhereInput
    orderBy?: PolygonFieldContraintOrderByWithAggregationInput | PolygonFieldContraintOrderByWithAggregationInput[]
    by: PolygonFieldContraintScalarFieldEnum[] | PolygonFieldContraintScalarFieldEnum
    having?: PolygonFieldContraintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolygonFieldContraintCountAggregateInputType | true
    _min?: PolygonFieldContraintMinAggregateInputType
    _max?: PolygonFieldContraintMaxAggregateInputType
  }

  export type PolygonFieldContraintGroupByOutputType = {
    id: string
    constraint_id: string
    _count: PolygonFieldContraintCountAggregateOutputType | null
    _min: PolygonFieldContraintMinAggregateOutputType | null
    _max: PolygonFieldContraintMaxAggregateOutputType | null
  }

  type GetPolygonFieldContraintGroupByPayload<T extends PolygonFieldContraintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolygonFieldContraintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolygonFieldContraintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolygonFieldContraintGroupByOutputType[P]>
            : GetScalarType<T[P], PolygonFieldContraintGroupByOutputType[P]>
        }
      >
    >


  export type PolygonFieldContraintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["polygonFieldContraint"]>

  export type PolygonFieldContraintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["polygonFieldContraint"]>

  export type PolygonFieldContraintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    constraint_id?: boolean
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["polygonFieldContraint"]>

  export type PolygonFieldContraintSelectScalar = {
    id?: boolean
    constraint_id?: boolean
  }

  export type PolygonFieldContraintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "constraint_id", ExtArgs["result"]["polygonFieldContraint"]>
  export type PolygonFieldContraintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type PolygonFieldContraintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }
  export type PolygonFieldContraintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constraint?: boolean | DirectoryFieldConstraintDefaultArgs<ExtArgs>
  }

  export type $PolygonFieldContraintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PolygonFieldContraint"
    objects: {
      constraint: Prisma.$DirectoryFieldConstraintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      constraint_id: string
    }, ExtArgs["result"]["polygonFieldContraint"]>
    composites: {}
  }

  type PolygonFieldContraintGetPayload<S extends boolean | null | undefined | PolygonFieldContraintDefaultArgs> = $Result.GetResult<Prisma.$PolygonFieldContraintPayload, S>

  type PolygonFieldContraintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolygonFieldContraintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolygonFieldContraintCountAggregateInputType | true
    }

  export interface PolygonFieldContraintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PolygonFieldContraint'], meta: { name: 'PolygonFieldContraint' } }
    /**
     * Find zero or one PolygonFieldContraint that matches the filter.
     * @param {PolygonFieldContraintFindUniqueArgs} args - Arguments to find a PolygonFieldContraint
     * @example
     * // Get one PolygonFieldContraint
     * const polygonFieldContraint = await prisma.polygonFieldContraint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolygonFieldContraintFindUniqueArgs>(args: SelectSubset<T, PolygonFieldContraintFindUniqueArgs<ExtArgs>>): Prisma__PolygonFieldContraintClient<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PolygonFieldContraint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolygonFieldContraintFindUniqueOrThrowArgs} args - Arguments to find a PolygonFieldContraint
     * @example
     * // Get one PolygonFieldContraint
     * const polygonFieldContraint = await prisma.polygonFieldContraint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolygonFieldContraintFindUniqueOrThrowArgs>(args: SelectSubset<T, PolygonFieldContraintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolygonFieldContraintClient<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolygonFieldContraint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolygonFieldContraintFindFirstArgs} args - Arguments to find a PolygonFieldContraint
     * @example
     * // Get one PolygonFieldContraint
     * const polygonFieldContraint = await prisma.polygonFieldContraint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolygonFieldContraintFindFirstArgs>(args?: SelectSubset<T, PolygonFieldContraintFindFirstArgs<ExtArgs>>): Prisma__PolygonFieldContraintClient<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolygonFieldContraint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolygonFieldContraintFindFirstOrThrowArgs} args - Arguments to find a PolygonFieldContraint
     * @example
     * // Get one PolygonFieldContraint
     * const polygonFieldContraint = await prisma.polygonFieldContraint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolygonFieldContraintFindFirstOrThrowArgs>(args?: SelectSubset<T, PolygonFieldContraintFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolygonFieldContraintClient<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PolygonFieldContraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolygonFieldContraintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolygonFieldContraints
     * const polygonFieldContraints = await prisma.polygonFieldContraint.findMany()
     * 
     * // Get first 10 PolygonFieldContraints
     * const polygonFieldContraints = await prisma.polygonFieldContraint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const polygonFieldContraintWithIdOnly = await prisma.polygonFieldContraint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolygonFieldContraintFindManyArgs>(args?: SelectSubset<T, PolygonFieldContraintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PolygonFieldContraint.
     * @param {PolygonFieldContraintCreateArgs} args - Arguments to create a PolygonFieldContraint.
     * @example
     * // Create one PolygonFieldContraint
     * const PolygonFieldContraint = await prisma.polygonFieldContraint.create({
     *   data: {
     *     // ... data to create a PolygonFieldContraint
     *   }
     * })
     * 
     */
    create<T extends PolygonFieldContraintCreateArgs>(args: SelectSubset<T, PolygonFieldContraintCreateArgs<ExtArgs>>): Prisma__PolygonFieldContraintClient<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PolygonFieldContraints.
     * @param {PolygonFieldContraintCreateManyArgs} args - Arguments to create many PolygonFieldContraints.
     * @example
     * // Create many PolygonFieldContraints
     * const polygonFieldContraint = await prisma.polygonFieldContraint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolygonFieldContraintCreateManyArgs>(args?: SelectSubset<T, PolygonFieldContraintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PolygonFieldContraints and returns the data saved in the database.
     * @param {PolygonFieldContraintCreateManyAndReturnArgs} args - Arguments to create many PolygonFieldContraints.
     * @example
     * // Create many PolygonFieldContraints
     * const polygonFieldContraint = await prisma.polygonFieldContraint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PolygonFieldContraints and only return the `id`
     * const polygonFieldContraintWithIdOnly = await prisma.polygonFieldContraint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolygonFieldContraintCreateManyAndReturnArgs>(args?: SelectSubset<T, PolygonFieldContraintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PolygonFieldContraint.
     * @param {PolygonFieldContraintDeleteArgs} args - Arguments to delete one PolygonFieldContraint.
     * @example
     * // Delete one PolygonFieldContraint
     * const PolygonFieldContraint = await prisma.polygonFieldContraint.delete({
     *   where: {
     *     // ... filter to delete one PolygonFieldContraint
     *   }
     * })
     * 
     */
    delete<T extends PolygonFieldContraintDeleteArgs>(args: SelectSubset<T, PolygonFieldContraintDeleteArgs<ExtArgs>>): Prisma__PolygonFieldContraintClient<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PolygonFieldContraint.
     * @param {PolygonFieldContraintUpdateArgs} args - Arguments to update one PolygonFieldContraint.
     * @example
     * // Update one PolygonFieldContraint
     * const polygonFieldContraint = await prisma.polygonFieldContraint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolygonFieldContraintUpdateArgs>(args: SelectSubset<T, PolygonFieldContraintUpdateArgs<ExtArgs>>): Prisma__PolygonFieldContraintClient<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PolygonFieldContraints.
     * @param {PolygonFieldContraintDeleteManyArgs} args - Arguments to filter PolygonFieldContraints to delete.
     * @example
     * // Delete a few PolygonFieldContraints
     * const { count } = await prisma.polygonFieldContraint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolygonFieldContraintDeleteManyArgs>(args?: SelectSubset<T, PolygonFieldContraintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolygonFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolygonFieldContraintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolygonFieldContraints
     * const polygonFieldContraint = await prisma.polygonFieldContraint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolygonFieldContraintUpdateManyArgs>(args: SelectSubset<T, PolygonFieldContraintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolygonFieldContraints and returns the data updated in the database.
     * @param {PolygonFieldContraintUpdateManyAndReturnArgs} args - Arguments to update many PolygonFieldContraints.
     * @example
     * // Update many PolygonFieldContraints
     * const polygonFieldContraint = await prisma.polygonFieldContraint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PolygonFieldContraints and only return the `id`
     * const polygonFieldContraintWithIdOnly = await prisma.polygonFieldContraint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolygonFieldContraintUpdateManyAndReturnArgs>(args: SelectSubset<T, PolygonFieldContraintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PolygonFieldContraint.
     * @param {PolygonFieldContraintUpsertArgs} args - Arguments to update or create a PolygonFieldContraint.
     * @example
     * // Update or create a PolygonFieldContraint
     * const polygonFieldContraint = await prisma.polygonFieldContraint.upsert({
     *   create: {
     *     // ... data to create a PolygonFieldContraint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolygonFieldContraint we want to update
     *   }
     * })
     */
    upsert<T extends PolygonFieldContraintUpsertArgs>(args: SelectSubset<T, PolygonFieldContraintUpsertArgs<ExtArgs>>): Prisma__PolygonFieldContraintClient<$Result.GetResult<Prisma.$PolygonFieldContraintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PolygonFieldContraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolygonFieldContraintCountArgs} args - Arguments to filter PolygonFieldContraints to count.
     * @example
     * // Count the number of PolygonFieldContraints
     * const count = await prisma.polygonFieldContraint.count({
     *   where: {
     *     // ... the filter for the PolygonFieldContraints we want to count
     *   }
     * })
    **/
    count<T extends PolygonFieldContraintCountArgs>(
      args?: Subset<T, PolygonFieldContraintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolygonFieldContraintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolygonFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolygonFieldContraintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolygonFieldContraintAggregateArgs>(args: Subset<T, PolygonFieldContraintAggregateArgs>): Prisma.PrismaPromise<GetPolygonFieldContraintAggregateType<T>>

    /**
     * Group by PolygonFieldContraint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolygonFieldContraintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolygonFieldContraintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolygonFieldContraintGroupByArgs['orderBy'] }
        : { orderBy?: PolygonFieldContraintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolygonFieldContraintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolygonFieldContraintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PolygonFieldContraint model
   */
  readonly fields: PolygonFieldContraintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolygonFieldContraint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolygonFieldContraintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constraint<T extends DirectoryFieldConstraintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldConstraintDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PolygonFieldContraint model
   */
  interface PolygonFieldContraintFieldRefs {
    readonly id: FieldRef<"PolygonFieldContraint", 'String'>
    readonly constraint_id: FieldRef<"PolygonFieldContraint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PolygonFieldContraint findUnique
   */
  export type PolygonFieldContraintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PolygonFieldContraint to fetch.
     */
    where: PolygonFieldContraintWhereUniqueInput
  }

  /**
   * PolygonFieldContraint findUniqueOrThrow
   */
  export type PolygonFieldContraintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PolygonFieldContraint to fetch.
     */
    where: PolygonFieldContraintWhereUniqueInput
  }

  /**
   * PolygonFieldContraint findFirst
   */
  export type PolygonFieldContraintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PolygonFieldContraint to fetch.
     */
    where?: PolygonFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolygonFieldContraints to fetch.
     */
    orderBy?: PolygonFieldContraintOrderByWithRelationInput | PolygonFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolygonFieldContraints.
     */
    cursor?: PolygonFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolygonFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolygonFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolygonFieldContraints.
     */
    distinct?: PolygonFieldContraintScalarFieldEnum | PolygonFieldContraintScalarFieldEnum[]
  }

  /**
   * PolygonFieldContraint findFirstOrThrow
   */
  export type PolygonFieldContraintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PolygonFieldContraint to fetch.
     */
    where?: PolygonFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolygonFieldContraints to fetch.
     */
    orderBy?: PolygonFieldContraintOrderByWithRelationInput | PolygonFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolygonFieldContraints.
     */
    cursor?: PolygonFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolygonFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolygonFieldContraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolygonFieldContraints.
     */
    distinct?: PolygonFieldContraintScalarFieldEnum | PolygonFieldContraintScalarFieldEnum[]
  }

  /**
   * PolygonFieldContraint findMany
   */
  export type PolygonFieldContraintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    /**
     * Filter, which PolygonFieldContraints to fetch.
     */
    where?: PolygonFieldContraintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolygonFieldContraints to fetch.
     */
    orderBy?: PolygonFieldContraintOrderByWithRelationInput | PolygonFieldContraintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolygonFieldContraints.
     */
    cursor?: PolygonFieldContraintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolygonFieldContraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolygonFieldContraints.
     */
    skip?: number
    distinct?: PolygonFieldContraintScalarFieldEnum | PolygonFieldContraintScalarFieldEnum[]
  }

  /**
   * PolygonFieldContraint create
   */
  export type PolygonFieldContraintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to create a PolygonFieldContraint.
     */
    data: XOR<PolygonFieldContraintCreateInput, PolygonFieldContraintUncheckedCreateInput>
  }

  /**
   * PolygonFieldContraint createMany
   */
  export type PolygonFieldContraintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PolygonFieldContraints.
     */
    data: PolygonFieldContraintCreateManyInput | PolygonFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolygonFieldContraint createManyAndReturn
   */
  export type PolygonFieldContraintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to create many PolygonFieldContraints.
     */
    data: PolygonFieldContraintCreateManyInput | PolygonFieldContraintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PolygonFieldContraint update
   */
  export type PolygonFieldContraintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    /**
     * The data needed to update a PolygonFieldContraint.
     */
    data: XOR<PolygonFieldContraintUpdateInput, PolygonFieldContraintUncheckedUpdateInput>
    /**
     * Choose, which PolygonFieldContraint to update.
     */
    where: PolygonFieldContraintWhereUniqueInput
  }

  /**
   * PolygonFieldContraint updateMany
   */
  export type PolygonFieldContraintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PolygonFieldContraints.
     */
    data: XOR<PolygonFieldContraintUpdateManyMutationInput, PolygonFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which PolygonFieldContraints to update
     */
    where?: PolygonFieldContraintWhereInput
    /**
     * Limit how many PolygonFieldContraints to update.
     */
    limit?: number
  }

  /**
   * PolygonFieldContraint updateManyAndReturn
   */
  export type PolygonFieldContraintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * The data used to update PolygonFieldContraints.
     */
    data: XOR<PolygonFieldContraintUpdateManyMutationInput, PolygonFieldContraintUncheckedUpdateManyInput>
    /**
     * Filter which PolygonFieldContraints to update
     */
    where?: PolygonFieldContraintWhereInput
    /**
     * Limit how many PolygonFieldContraints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PolygonFieldContraint upsert
   */
  export type PolygonFieldContraintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    /**
     * The filter to search for the PolygonFieldContraint to update in case it exists.
     */
    where: PolygonFieldContraintWhereUniqueInput
    /**
     * In case the PolygonFieldContraint found by the `where` argument doesn't exist, create a new PolygonFieldContraint with this data.
     */
    create: XOR<PolygonFieldContraintCreateInput, PolygonFieldContraintUncheckedCreateInput>
    /**
     * In case the PolygonFieldContraint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolygonFieldContraintUpdateInput, PolygonFieldContraintUncheckedUpdateInput>
  }

  /**
   * PolygonFieldContraint delete
   */
  export type PolygonFieldContraintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
    /**
     * Filter which PolygonFieldContraint to delete.
     */
    where: PolygonFieldContraintWhereUniqueInput
  }

  /**
   * PolygonFieldContraint deleteMany
   */
  export type PolygonFieldContraintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolygonFieldContraints to delete
     */
    where?: PolygonFieldContraintWhereInput
    /**
     * Limit how many PolygonFieldContraints to delete.
     */
    limit?: number
  }

  /**
   * PolygonFieldContraint without action
   */
  export type PolygonFieldContraintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolygonFieldContraint
     */
    select?: PolygonFieldContraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolygonFieldContraint
     */
    omit?: PolygonFieldContraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolygonFieldContraintInclude<ExtArgs> | null
  }


  /**
   * Model DirectoryField
   */

  export type AggregateDirectoryField = {
    _count: DirectoryFieldCountAggregateOutputType | null
    _avg: DirectoryFieldAvgAggregateOutputType | null
    _sum: DirectoryFieldSumAggregateOutputType | null
    _min: DirectoryFieldMinAggregateOutputType | null
    _max: DirectoryFieldMaxAggregateOutputType | null
  }

  export type DirectoryFieldAvgAggregateOutputType = {
    order: number | null
  }

  export type DirectoryFieldSumAggregateOutputType = {
    order: number | null
  }

  export type DirectoryFieldMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    type: $Enums.DirectoryFieldType | null
    required: boolean | null
    order: number | null
    show_in_list: boolean | null
    directory_id: string | null
  }

  export type DirectoryFieldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    type: $Enums.DirectoryFieldType | null
    required: boolean | null
    order: number | null
    show_in_list: boolean | null
    directory_id: string | null
  }

  export type DirectoryFieldCountAggregateOutputType = {
    id: number
    name: number
    code: number
    type: number
    required: number
    order: number
    show_in_list: number
    directory_id: number
    _all: number
  }


  export type DirectoryFieldAvgAggregateInputType = {
    order?: true
  }

  export type DirectoryFieldSumAggregateInputType = {
    order?: true
  }

  export type DirectoryFieldMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    type?: true
    required?: true
    order?: true
    show_in_list?: true
    directory_id?: true
  }

  export type DirectoryFieldMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    type?: true
    required?: true
    order?: true
    show_in_list?: true
    directory_id?: true
  }

  export type DirectoryFieldCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    type?: true
    required?: true
    order?: true
    show_in_list?: true
    directory_id?: true
    _all?: true
  }

  export type DirectoryFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectoryField to aggregate.
     */
    where?: DirectoryFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFields to fetch.
     */
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectoryFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectoryFields
    **/
    _count?: true | DirectoryFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectoryFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectoryFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectoryFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectoryFieldMaxAggregateInputType
  }

  export type GetDirectoryFieldAggregateType<T extends DirectoryFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectoryField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectoryField[P]>
      : GetScalarType<T[P], AggregateDirectoryField[P]>
  }




  export type DirectoryFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryFieldWhereInput
    orderBy?: DirectoryFieldOrderByWithAggregationInput | DirectoryFieldOrderByWithAggregationInput[]
    by: DirectoryFieldScalarFieldEnum[] | DirectoryFieldScalarFieldEnum
    having?: DirectoryFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectoryFieldCountAggregateInputType | true
    _avg?: DirectoryFieldAvgAggregateInputType
    _sum?: DirectoryFieldSumAggregateInputType
    _min?: DirectoryFieldMinAggregateInputType
    _max?: DirectoryFieldMaxAggregateInputType
  }

  export type DirectoryFieldGroupByOutputType = {
    id: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required: boolean
    order: number
    show_in_list: boolean
    directory_id: string
    _count: DirectoryFieldCountAggregateOutputType | null
    _avg: DirectoryFieldAvgAggregateOutputType | null
    _sum: DirectoryFieldSumAggregateOutputType | null
    _min: DirectoryFieldMinAggregateOutputType | null
    _max: DirectoryFieldMaxAggregateOutputType | null
  }

  type GetDirectoryFieldGroupByPayload<T extends DirectoryFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectoryFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectoryFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectoryFieldGroupByOutputType[P]>
            : GetScalarType<T[P], DirectoryFieldGroupByOutputType[P]>
        }
      >
    >


  export type DirectoryFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    show_in_list?: boolean
    directory_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
    constraint?: boolean | DirectoryField$constraintArgs<ExtArgs>
    layers?: boolean | DirectoryField$layersArgs<ExtArgs>
    _count?: boolean | DirectoryFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directoryField"]>

  export type DirectoryFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    show_in_list?: boolean
    directory_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directoryField"]>

  export type DirectoryFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    show_in_list?: boolean
    directory_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directoryField"]>

  export type DirectoryFieldSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    show_in_list?: boolean
    directory_id?: boolean
  }

  export type DirectoryFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "type" | "required" | "order" | "show_in_list" | "directory_id", ExtArgs["result"]["directoryField"]>
  export type DirectoryFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
    constraint?: boolean | DirectoryField$constraintArgs<ExtArgs>
    layers?: boolean | DirectoryField$layersArgs<ExtArgs>
    _count?: boolean | DirectoryFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DirectoryFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }
  export type DirectoryFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }

  export type $DirectoryFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectoryField"
    objects: {
      directory: Prisma.$DirectoryPayload<ExtArgs>
      constraint: Prisma.$DirectoryFieldConstraintPayload<ExtArgs> | null
      layers: Prisma.$LayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      type: $Enums.DirectoryFieldType
      required: boolean
      order: number
      show_in_list: boolean
      directory_id: string
    }, ExtArgs["result"]["directoryField"]>
    composites: {}
  }

  type DirectoryFieldGetPayload<S extends boolean | null | undefined | DirectoryFieldDefaultArgs> = $Result.GetResult<Prisma.$DirectoryFieldPayload, S>

  type DirectoryFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectoryFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectoryFieldCountAggregateInputType | true
    }

  export interface DirectoryFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectoryField'], meta: { name: 'DirectoryField' } }
    /**
     * Find zero or one DirectoryField that matches the filter.
     * @param {DirectoryFieldFindUniqueArgs} args - Arguments to find a DirectoryField
     * @example
     * // Get one DirectoryField
     * const directoryField = await prisma.directoryField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectoryFieldFindUniqueArgs>(args: SelectSubset<T, DirectoryFieldFindUniqueArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DirectoryField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectoryFieldFindUniqueOrThrowArgs} args - Arguments to find a DirectoryField
     * @example
     * // Get one DirectoryField
     * const directoryField = await prisma.directoryField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectoryFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectoryFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectoryField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldFindFirstArgs} args - Arguments to find a DirectoryField
     * @example
     * // Get one DirectoryField
     * const directoryField = await prisma.directoryField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectoryFieldFindFirstArgs>(args?: SelectSubset<T, DirectoryFieldFindFirstArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectoryField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldFindFirstOrThrowArgs} args - Arguments to find a DirectoryField
     * @example
     * // Get one DirectoryField
     * const directoryField = await prisma.directoryField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectoryFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectoryFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DirectoryFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectoryFields
     * const directoryFields = await prisma.directoryField.findMany()
     * 
     * // Get first 10 DirectoryFields
     * const directoryFields = await prisma.directoryField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directoryFieldWithIdOnly = await prisma.directoryField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectoryFieldFindManyArgs>(args?: SelectSubset<T, DirectoryFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DirectoryField.
     * @param {DirectoryFieldCreateArgs} args - Arguments to create a DirectoryField.
     * @example
     * // Create one DirectoryField
     * const DirectoryField = await prisma.directoryField.create({
     *   data: {
     *     // ... data to create a DirectoryField
     *   }
     * })
     * 
     */
    create<T extends DirectoryFieldCreateArgs>(args: SelectSubset<T, DirectoryFieldCreateArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DirectoryFields.
     * @param {DirectoryFieldCreateManyArgs} args - Arguments to create many DirectoryFields.
     * @example
     * // Create many DirectoryFields
     * const directoryField = await prisma.directoryField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectoryFieldCreateManyArgs>(args?: SelectSubset<T, DirectoryFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DirectoryFields and returns the data saved in the database.
     * @param {DirectoryFieldCreateManyAndReturnArgs} args - Arguments to create many DirectoryFields.
     * @example
     * // Create many DirectoryFields
     * const directoryField = await prisma.directoryField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DirectoryFields and only return the `id`
     * const directoryFieldWithIdOnly = await prisma.directoryField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectoryFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectoryFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DirectoryField.
     * @param {DirectoryFieldDeleteArgs} args - Arguments to delete one DirectoryField.
     * @example
     * // Delete one DirectoryField
     * const DirectoryField = await prisma.directoryField.delete({
     *   where: {
     *     // ... filter to delete one DirectoryField
     *   }
     * })
     * 
     */
    delete<T extends DirectoryFieldDeleteArgs>(args: SelectSubset<T, DirectoryFieldDeleteArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DirectoryField.
     * @param {DirectoryFieldUpdateArgs} args - Arguments to update one DirectoryField.
     * @example
     * // Update one DirectoryField
     * const directoryField = await prisma.directoryField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectoryFieldUpdateArgs>(args: SelectSubset<T, DirectoryFieldUpdateArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DirectoryFields.
     * @param {DirectoryFieldDeleteManyArgs} args - Arguments to filter DirectoryFields to delete.
     * @example
     * // Delete a few DirectoryFields
     * const { count } = await prisma.directoryField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectoryFieldDeleteManyArgs>(args?: SelectSubset<T, DirectoryFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectoryFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectoryFields
     * const directoryField = await prisma.directoryField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectoryFieldUpdateManyArgs>(args: SelectSubset<T, DirectoryFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectoryFields and returns the data updated in the database.
     * @param {DirectoryFieldUpdateManyAndReturnArgs} args - Arguments to update many DirectoryFields.
     * @example
     * // Update many DirectoryFields
     * const directoryField = await prisma.directoryField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DirectoryFields and only return the `id`
     * const directoryFieldWithIdOnly = await prisma.directoryField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DirectoryFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectoryFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DirectoryField.
     * @param {DirectoryFieldUpsertArgs} args - Arguments to update or create a DirectoryField.
     * @example
     * // Update or create a DirectoryField
     * const directoryField = await prisma.directoryField.upsert({
     *   create: {
     *     // ... data to create a DirectoryField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectoryField we want to update
     *   }
     * })
     */
    upsert<T extends DirectoryFieldUpsertArgs>(args: SelectSubset<T, DirectoryFieldUpsertArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DirectoryFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldCountArgs} args - Arguments to filter DirectoryFields to count.
     * @example
     * // Count the number of DirectoryFields
     * const count = await prisma.directoryField.count({
     *   where: {
     *     // ... the filter for the DirectoryFields we want to count
     *   }
     * })
    **/
    count<T extends DirectoryFieldCountArgs>(
      args?: Subset<T, DirectoryFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectoryFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectoryField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectoryFieldAggregateArgs>(args: Subset<T, DirectoryFieldAggregateArgs>): Prisma.PrismaPromise<GetDirectoryFieldAggregateType<T>>

    /**
     * Group by DirectoryField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectoryFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectoryFieldGroupByArgs['orderBy'] }
        : { orderBy?: DirectoryFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectoryFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectoryFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DirectoryField model
   */
  readonly fields: DirectoryFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectoryField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectoryFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    directory<T extends DirectoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryDefaultArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    constraint<T extends DirectoryField$constraintArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryField$constraintArgs<ExtArgs>>): Prisma__DirectoryFieldConstraintClient<$Result.GetResult<Prisma.$DirectoryFieldConstraintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    layers<T extends DirectoryField$layersArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryField$layersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DirectoryField model
   */
  interface DirectoryFieldFieldRefs {
    readonly id: FieldRef<"DirectoryField", 'String'>
    readonly name: FieldRef<"DirectoryField", 'String'>
    readonly code: FieldRef<"DirectoryField", 'String'>
    readonly type: FieldRef<"DirectoryField", 'DirectoryFieldType'>
    readonly required: FieldRef<"DirectoryField", 'Boolean'>
    readonly order: FieldRef<"DirectoryField", 'Int'>
    readonly show_in_list: FieldRef<"DirectoryField", 'Boolean'>
    readonly directory_id: FieldRef<"DirectoryField", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DirectoryField findUnique
   */
  export type DirectoryFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryField to fetch.
     */
    where: DirectoryFieldWhereUniqueInput
  }

  /**
   * DirectoryField findUniqueOrThrow
   */
  export type DirectoryFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryField to fetch.
     */
    where: DirectoryFieldWhereUniqueInput
  }

  /**
   * DirectoryField findFirst
   */
  export type DirectoryFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryField to fetch.
     */
    where?: DirectoryFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFields to fetch.
     */
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectoryFields.
     */
    cursor?: DirectoryFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectoryFields.
     */
    distinct?: DirectoryFieldScalarFieldEnum | DirectoryFieldScalarFieldEnum[]
  }

  /**
   * DirectoryField findFirstOrThrow
   */
  export type DirectoryFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryField to fetch.
     */
    where?: DirectoryFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFields to fetch.
     */
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectoryFields.
     */
    cursor?: DirectoryFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectoryFields.
     */
    distinct?: DirectoryFieldScalarFieldEnum | DirectoryFieldScalarFieldEnum[]
  }

  /**
   * DirectoryField findMany
   */
  export type DirectoryFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryFields to fetch.
     */
    where?: DirectoryFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFields to fetch.
     */
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectoryFields.
     */
    cursor?: DirectoryFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFields.
     */
    skip?: number
    distinct?: DirectoryFieldScalarFieldEnum | DirectoryFieldScalarFieldEnum[]
  }

  /**
   * DirectoryField create
   */
  export type DirectoryFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectoryField.
     */
    data: XOR<DirectoryFieldCreateInput, DirectoryFieldUncheckedCreateInput>
  }

  /**
   * DirectoryField createMany
   */
  export type DirectoryFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectoryFields.
     */
    data: DirectoryFieldCreateManyInput | DirectoryFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DirectoryField createManyAndReturn
   */
  export type DirectoryFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * The data used to create many DirectoryFields.
     */
    data: DirectoryFieldCreateManyInput | DirectoryFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectoryField update
   */
  export type DirectoryFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectoryField.
     */
    data: XOR<DirectoryFieldUpdateInput, DirectoryFieldUncheckedUpdateInput>
    /**
     * Choose, which DirectoryField to update.
     */
    where: DirectoryFieldWhereUniqueInput
  }

  /**
   * DirectoryField updateMany
   */
  export type DirectoryFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectoryFields.
     */
    data: XOR<DirectoryFieldUpdateManyMutationInput, DirectoryFieldUncheckedUpdateManyInput>
    /**
     * Filter which DirectoryFields to update
     */
    where?: DirectoryFieldWhereInput
    /**
     * Limit how many DirectoryFields to update.
     */
    limit?: number
  }

  /**
   * DirectoryField updateManyAndReturn
   */
  export type DirectoryFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * The data used to update DirectoryFields.
     */
    data: XOR<DirectoryFieldUpdateManyMutationInput, DirectoryFieldUncheckedUpdateManyInput>
    /**
     * Filter which DirectoryFields to update
     */
    where?: DirectoryFieldWhereInput
    /**
     * Limit how many DirectoryFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectoryField upsert
   */
  export type DirectoryFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectoryField to update in case it exists.
     */
    where: DirectoryFieldWhereUniqueInput
    /**
     * In case the DirectoryField found by the `where` argument doesn't exist, create a new DirectoryField with this data.
     */
    create: XOR<DirectoryFieldCreateInput, DirectoryFieldUncheckedCreateInput>
    /**
     * In case the DirectoryField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectoryFieldUpdateInput, DirectoryFieldUncheckedUpdateInput>
  }

  /**
   * DirectoryField delete
   */
  export type DirectoryFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter which DirectoryField to delete.
     */
    where: DirectoryFieldWhereUniqueInput
  }

  /**
   * DirectoryField deleteMany
   */
  export type DirectoryFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectoryFields to delete
     */
    where?: DirectoryFieldWhereInput
    /**
     * Limit how many DirectoryFields to delete.
     */
    limit?: number
  }

  /**
   * DirectoryField.constraint
   */
  export type DirectoryField$constraintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryFieldConstraint
     */
    select?: DirectoryFieldConstraintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryFieldConstraint
     */
    omit?: DirectoryFieldConstraintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldConstraintInclude<ExtArgs> | null
    where?: DirectoryFieldConstraintWhereInput
  }

  /**
   * DirectoryField.layers
   */
  export type DirectoryField$layersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    where?: LayerWhereInput
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    cursor?: LayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayerScalarFieldEnum | LayerScalarFieldEnum[]
  }

  /**
   * DirectoryField without action
   */
  export type DirectoryFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
  }


  /**
   * Model Directory
   */

  export type AggregateDirectory = {
    _count: DirectoryCountAggregateOutputType | null
    _min: DirectoryMinAggregateOutputType | null
    _max: DirectoryMaxAggregateOutputType | null
  }

  export type DirectoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type DirectoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type DirectoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type DirectoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type DirectoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type DirectoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type DirectoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directory to aggregate.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Directories
    **/
    _count?: true | DirectoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectoryMaxAggregateInputType
  }

  export type GetDirectoryAggregateType<T extends DirectoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectory[P]>
      : GetScalarType<T[P], AggregateDirectory[P]>
  }




  export type DirectoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryWhereInput
    orderBy?: DirectoryOrderByWithAggregationInput | DirectoryOrderByWithAggregationInput[]
    by: DirectoryScalarFieldEnum[] | DirectoryScalarFieldEnum
    having?: DirectoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectoryCountAggregateInputType | true
    _min?: DirectoryMinAggregateInputType
    _max?: DirectoryMaxAggregateInputType
  }

  export type DirectoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: DirectoryCountAggregateOutputType | null
    _min: DirectoryMinAggregateOutputType | null
    _max: DirectoryMaxAggregateOutputType | null
  }

  type GetDirectoryGroupByPayload<T extends DirectoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectoryGroupByOutputType[P]>
            : GetScalarType<T[P], DirectoryGroupByOutputType[P]>
        }
      >
    >


  export type DirectorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fields?: boolean | Directory$fieldsArgs<ExtArgs>
    elements?: boolean | Directory$elementsArgs<ExtArgs>
    layers?: boolean | Directory$layersArgs<ExtArgs>
    _count?: boolean | DirectoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directory"]>

  export type DirectorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["directory"]>

  export type DirectorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["directory"]>

  export type DirectorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type DirectoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["directory"]>
  export type DirectoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | Directory$fieldsArgs<ExtArgs>
    elements?: boolean | Directory$elementsArgs<ExtArgs>
    layers?: boolean | Directory$layersArgs<ExtArgs>
    _count?: boolean | DirectoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DirectoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DirectoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DirectoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Directory"
    objects: {
      fields: Prisma.$DirectoryFieldPayload<ExtArgs>[]
      elements: Prisma.$ElementsPayload<ExtArgs>[]
      layers: Prisma.$LayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["directory"]>
    composites: {}
  }

  type DirectoryGetPayload<S extends boolean | null | undefined | DirectoryDefaultArgs> = $Result.GetResult<Prisma.$DirectoryPayload, S>

  type DirectoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectoryCountAggregateInputType | true
    }

  export interface DirectoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Directory'], meta: { name: 'Directory' } }
    /**
     * Find zero or one Directory that matches the filter.
     * @param {DirectoryFindUniqueArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectoryFindUniqueArgs>(args: SelectSubset<T, DirectoryFindUniqueArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Directory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectoryFindUniqueOrThrowArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Directory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFindFirstArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectoryFindFirstArgs>(args?: SelectSubset<T, DirectoryFindFirstArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Directory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFindFirstOrThrowArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Directories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directories
     * const directories = await prisma.directory.findMany()
     * 
     * // Get first 10 Directories
     * const directories = await prisma.directory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directoryWithIdOnly = await prisma.directory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectoryFindManyArgs>(args?: SelectSubset<T, DirectoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Directory.
     * @param {DirectoryCreateArgs} args - Arguments to create a Directory.
     * @example
     * // Create one Directory
     * const Directory = await prisma.directory.create({
     *   data: {
     *     // ... data to create a Directory
     *   }
     * })
     * 
     */
    create<T extends DirectoryCreateArgs>(args: SelectSubset<T, DirectoryCreateArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Directories.
     * @param {DirectoryCreateManyArgs} args - Arguments to create many Directories.
     * @example
     * // Create many Directories
     * const directory = await prisma.directory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectoryCreateManyArgs>(args?: SelectSubset<T, DirectoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Directories and returns the data saved in the database.
     * @param {DirectoryCreateManyAndReturnArgs} args - Arguments to create many Directories.
     * @example
     * // Create many Directories
     * const directory = await prisma.directory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Directories and only return the `id`
     * const directoryWithIdOnly = await prisma.directory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Directory.
     * @param {DirectoryDeleteArgs} args - Arguments to delete one Directory.
     * @example
     * // Delete one Directory
     * const Directory = await prisma.directory.delete({
     *   where: {
     *     // ... filter to delete one Directory
     *   }
     * })
     * 
     */
    delete<T extends DirectoryDeleteArgs>(args: SelectSubset<T, DirectoryDeleteArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Directory.
     * @param {DirectoryUpdateArgs} args - Arguments to update one Directory.
     * @example
     * // Update one Directory
     * const directory = await prisma.directory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectoryUpdateArgs>(args: SelectSubset<T, DirectoryUpdateArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Directories.
     * @param {DirectoryDeleteManyArgs} args - Arguments to filter Directories to delete.
     * @example
     * // Delete a few Directories
     * const { count } = await prisma.directory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectoryDeleteManyArgs>(args?: SelectSubset<T, DirectoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directories
     * const directory = await prisma.directory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectoryUpdateManyArgs>(args: SelectSubset<T, DirectoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directories and returns the data updated in the database.
     * @param {DirectoryUpdateManyAndReturnArgs} args - Arguments to update many Directories.
     * @example
     * // Update many Directories
     * const directory = await prisma.directory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Directories and only return the `id`
     * const directoryWithIdOnly = await prisma.directory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DirectoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Directory.
     * @param {DirectoryUpsertArgs} args - Arguments to update or create a Directory.
     * @example
     * // Update or create a Directory
     * const directory = await prisma.directory.upsert({
     *   create: {
     *     // ... data to create a Directory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Directory we want to update
     *   }
     * })
     */
    upsert<T extends DirectoryUpsertArgs>(args: SelectSubset<T, DirectoryUpsertArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryCountArgs} args - Arguments to filter Directories to count.
     * @example
     * // Count the number of Directories
     * const count = await prisma.directory.count({
     *   where: {
     *     // ... the filter for the Directories we want to count
     *   }
     * })
    **/
    count<T extends DirectoryCountArgs>(
      args?: Subset<T, DirectoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Directory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectoryAggregateArgs>(args: Subset<T, DirectoryAggregateArgs>): Prisma.PrismaPromise<GetDirectoryAggregateType<T>>

    /**
     * Group by Directory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectoryGroupByArgs['orderBy'] }
        : { orderBy?: DirectoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Directory model
   */
  readonly fields: DirectoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Directory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fields<T extends Directory$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Directory$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    elements<T extends Directory$elementsArgs<ExtArgs> = {}>(args?: Subset<T, Directory$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    layers<T extends Directory$layersArgs<ExtArgs> = {}>(args?: Subset<T, Directory$layersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Directory model
   */
  interface DirectoryFieldRefs {
    readonly id: FieldRef<"Directory", 'String'>
    readonly name: FieldRef<"Directory", 'String'>
    readonly description: FieldRef<"Directory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Directory findUnique
   */
  export type DirectoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory findUniqueOrThrow
   */
  export type DirectoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory findFirst
   */
  export type DirectoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directories.
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directories.
     */
    distinct?: DirectoryScalarFieldEnum | DirectoryScalarFieldEnum[]
  }

  /**
   * Directory findFirstOrThrow
   */
  export type DirectoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directories.
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directories.
     */
    distinct?: DirectoryScalarFieldEnum | DirectoryScalarFieldEnum[]
  }

  /**
   * Directory findMany
   */
  export type DirectoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directories to fetch.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directories.
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    distinct?: DirectoryScalarFieldEnum | DirectoryScalarFieldEnum[]
  }

  /**
   * Directory create
   */
  export type DirectoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Directory.
     */
    data: XOR<DirectoryCreateInput, DirectoryUncheckedCreateInput>
  }

  /**
   * Directory createMany
   */
  export type DirectoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directories.
     */
    data: DirectoryCreateManyInput | DirectoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Directory createManyAndReturn
   */
  export type DirectoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * The data used to create many Directories.
     */
    data: DirectoryCreateManyInput | DirectoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Directory update
   */
  export type DirectoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Directory.
     */
    data: XOR<DirectoryUpdateInput, DirectoryUncheckedUpdateInput>
    /**
     * Choose, which Directory to update.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory updateMany
   */
  export type DirectoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Directories.
     */
    data: XOR<DirectoryUpdateManyMutationInput, DirectoryUncheckedUpdateManyInput>
    /**
     * Filter which Directories to update
     */
    where?: DirectoryWhereInput
    /**
     * Limit how many Directories to update.
     */
    limit?: number
  }

  /**
   * Directory updateManyAndReturn
   */
  export type DirectoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * The data used to update Directories.
     */
    data: XOR<DirectoryUpdateManyMutationInput, DirectoryUncheckedUpdateManyInput>
    /**
     * Filter which Directories to update
     */
    where?: DirectoryWhereInput
    /**
     * Limit how many Directories to update.
     */
    limit?: number
  }

  /**
   * Directory upsert
   */
  export type DirectoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Directory to update in case it exists.
     */
    where: DirectoryWhereUniqueInput
    /**
     * In case the Directory found by the `where` argument doesn't exist, create a new Directory with this data.
     */
    create: XOR<DirectoryCreateInput, DirectoryUncheckedCreateInput>
    /**
     * In case the Directory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectoryUpdateInput, DirectoryUncheckedUpdateInput>
  }

  /**
   * Directory delete
   */
  export type DirectoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter which Directory to delete.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory deleteMany
   */
  export type DirectoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directories to delete
     */
    where?: DirectoryWhereInput
    /**
     * Limit how many Directories to delete.
     */
    limit?: number
  }

  /**
   * Directory.fields
   */
  export type Directory$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryField
     */
    omit?: DirectoryFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    where?: DirectoryFieldWhereInput
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    cursor?: DirectoryFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectoryFieldScalarFieldEnum | DirectoryFieldScalarFieldEnum[]
  }

  /**
   * Directory.elements
   */
  export type Directory$elementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    where?: ElementsWhereInput
    orderBy?: ElementsOrderByWithRelationInput | ElementsOrderByWithRelationInput[]
    cursor?: ElementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElementsScalarFieldEnum | ElementsScalarFieldEnum[]
  }

  /**
   * Directory.layers
   */
  export type Directory$layersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    where?: LayerWhereInput
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    cursor?: LayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayerScalarFieldEnum | LayerScalarFieldEnum[]
  }

  /**
   * Directory without action
   */
  export type DirectoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
  }


  /**
   * Model Elements
   */

  export type AggregateElements = {
    _count: ElementsCountAggregateOutputType | null
    _min: ElementsMinAggregateOutputType | null
    _max: ElementsMaxAggregateOutputType | null
  }

  export type ElementsMinAggregateOutputType = {
    id: string | null
    is_valid: boolean | null
    directory_id: string | null
  }

  export type ElementsMaxAggregateOutputType = {
    id: string | null
    is_valid: boolean | null
    directory_id: string | null
  }

  export type ElementsCountAggregateOutputType = {
    id: number
    data: number
    is_valid: number
    directory_id: number
    _all: number
  }


  export type ElementsMinAggregateInputType = {
    id?: true
    is_valid?: true
    directory_id?: true
  }

  export type ElementsMaxAggregateInputType = {
    id?: true
    is_valid?: true
    directory_id?: true
  }

  export type ElementsCountAggregateInputType = {
    id?: true
    data?: true
    is_valid?: true
    directory_id?: true
    _all?: true
  }

  export type ElementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elements to aggregate.
     */
    where?: ElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementsOrderByWithRelationInput | ElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Elements
    **/
    _count?: true | ElementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElementsMaxAggregateInputType
  }

  export type GetElementsAggregateType<T extends ElementsAggregateArgs> = {
        [P in keyof T & keyof AggregateElements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElements[P]>
      : GetScalarType<T[P], AggregateElements[P]>
  }




  export type ElementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElementsWhereInput
    orderBy?: ElementsOrderByWithAggregationInput | ElementsOrderByWithAggregationInput[]
    by: ElementsScalarFieldEnum[] | ElementsScalarFieldEnum
    having?: ElementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElementsCountAggregateInputType | true
    _min?: ElementsMinAggregateInputType
    _max?: ElementsMaxAggregateInputType
  }

  export type ElementsGroupByOutputType = {
    id: string
    data: JsonValue
    is_valid: boolean
    directory_id: string
    _count: ElementsCountAggregateOutputType | null
    _min: ElementsMinAggregateOutputType | null
    _max: ElementsMaxAggregateOutputType | null
  }

  type GetElementsGroupByPayload<T extends ElementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElementsGroupByOutputType[P]>
            : GetScalarType<T[P], ElementsGroupByOutputType[P]>
        }
      >
    >


  export type ElementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    is_valid?: boolean
    directory_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elements"]>

  export type ElementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    is_valid?: boolean
    directory_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elements"]>

  export type ElementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    is_valid?: boolean
    directory_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elements"]>

  export type ElementsSelectScalar = {
    id?: boolean
    data?: boolean
    is_valid?: boolean
    directory_id?: boolean
  }

  export type ElementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "is_valid" | "directory_id", ExtArgs["result"]["elements"]>
  export type ElementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }
  export type ElementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }
  export type ElementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }

  export type $ElementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Elements"
    objects: {
      directory: Prisma.$DirectoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Prisma.JsonValue
      is_valid: boolean
      directory_id: string
    }, ExtArgs["result"]["elements"]>
    composites: {}
  }

  type ElementsGetPayload<S extends boolean | null | undefined | ElementsDefaultArgs> = $Result.GetResult<Prisma.$ElementsPayload, S>

  type ElementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElementsCountAggregateInputType | true
    }

  export interface ElementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Elements'], meta: { name: 'Elements' } }
    /**
     * Find zero or one Elements that matches the filter.
     * @param {ElementsFindUniqueArgs} args - Arguments to find a Elements
     * @example
     * // Get one Elements
     * const elements = await prisma.elements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElementsFindUniqueArgs>(args: SelectSubset<T, ElementsFindUniqueArgs<ExtArgs>>): Prisma__ElementsClient<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Elements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElementsFindUniqueOrThrowArgs} args - Arguments to find a Elements
     * @example
     * // Get one Elements
     * const elements = await prisma.elements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElementsFindUniqueOrThrowArgs>(args: SelectSubset<T, ElementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElementsClient<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementsFindFirstArgs} args - Arguments to find a Elements
     * @example
     * // Get one Elements
     * const elements = await prisma.elements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElementsFindFirstArgs>(args?: SelectSubset<T, ElementsFindFirstArgs<ExtArgs>>): Prisma__ElementsClient<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementsFindFirstOrThrowArgs} args - Arguments to find a Elements
     * @example
     * // Get one Elements
     * const elements = await prisma.elements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElementsFindFirstOrThrowArgs>(args?: SelectSubset<T, ElementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElementsClient<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elements
     * const elements = await prisma.elements.findMany()
     * 
     * // Get first 10 Elements
     * const elements = await prisma.elements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const elementsWithIdOnly = await prisma.elements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ElementsFindManyArgs>(args?: SelectSubset<T, ElementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Elements.
     * @param {ElementsCreateArgs} args - Arguments to create a Elements.
     * @example
     * // Create one Elements
     * const Elements = await prisma.elements.create({
     *   data: {
     *     // ... data to create a Elements
     *   }
     * })
     * 
     */
    create<T extends ElementsCreateArgs>(args: SelectSubset<T, ElementsCreateArgs<ExtArgs>>): Prisma__ElementsClient<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elements.
     * @param {ElementsCreateManyArgs} args - Arguments to create many Elements.
     * @example
     * // Create many Elements
     * const elements = await prisma.elements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElementsCreateManyArgs>(args?: SelectSubset<T, ElementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Elements and returns the data saved in the database.
     * @param {ElementsCreateManyAndReturnArgs} args - Arguments to create many Elements.
     * @example
     * // Create many Elements
     * const elements = await prisma.elements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Elements and only return the `id`
     * const elementsWithIdOnly = await prisma.elements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElementsCreateManyAndReturnArgs>(args?: SelectSubset<T, ElementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Elements.
     * @param {ElementsDeleteArgs} args - Arguments to delete one Elements.
     * @example
     * // Delete one Elements
     * const Elements = await prisma.elements.delete({
     *   where: {
     *     // ... filter to delete one Elements
     *   }
     * })
     * 
     */
    delete<T extends ElementsDeleteArgs>(args: SelectSubset<T, ElementsDeleteArgs<ExtArgs>>): Prisma__ElementsClient<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Elements.
     * @param {ElementsUpdateArgs} args - Arguments to update one Elements.
     * @example
     * // Update one Elements
     * const elements = await prisma.elements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElementsUpdateArgs>(args: SelectSubset<T, ElementsUpdateArgs<ExtArgs>>): Prisma__ElementsClient<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elements.
     * @param {ElementsDeleteManyArgs} args - Arguments to filter Elements to delete.
     * @example
     * // Delete a few Elements
     * const { count } = await prisma.elements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElementsDeleteManyArgs>(args?: SelectSubset<T, ElementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elements
     * const elements = await prisma.elements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElementsUpdateManyArgs>(args: SelectSubset<T, ElementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elements and returns the data updated in the database.
     * @param {ElementsUpdateManyAndReturnArgs} args - Arguments to update many Elements.
     * @example
     * // Update many Elements
     * const elements = await prisma.elements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Elements and only return the `id`
     * const elementsWithIdOnly = await prisma.elements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ElementsUpdateManyAndReturnArgs>(args: SelectSubset<T, ElementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Elements.
     * @param {ElementsUpsertArgs} args - Arguments to update or create a Elements.
     * @example
     * // Update or create a Elements
     * const elements = await prisma.elements.upsert({
     *   create: {
     *     // ... data to create a Elements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Elements we want to update
     *   }
     * })
     */
    upsert<T extends ElementsUpsertArgs>(args: SelectSubset<T, ElementsUpsertArgs<ExtArgs>>): Prisma__ElementsClient<$Result.GetResult<Prisma.$ElementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementsCountArgs} args - Arguments to filter Elements to count.
     * @example
     * // Count the number of Elements
     * const count = await prisma.elements.count({
     *   where: {
     *     // ... the filter for the Elements we want to count
     *   }
     * })
    **/
    count<T extends ElementsCountArgs>(
      args?: Subset<T, ElementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElementsAggregateArgs>(args: Subset<T, ElementsAggregateArgs>): Prisma.PrismaPromise<GetElementsAggregateType<T>>

    /**
     * Group by Elements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElementsGroupByArgs['orderBy'] }
        : { orderBy?: ElementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Elements model
   */
  readonly fields: ElementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Elements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    directory<T extends DirectoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryDefaultArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Elements model
   */
  interface ElementsFieldRefs {
    readonly id: FieldRef<"Elements", 'String'>
    readonly data: FieldRef<"Elements", 'Json'>
    readonly is_valid: FieldRef<"Elements", 'Boolean'>
    readonly directory_id: FieldRef<"Elements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Elements findUnique
   */
  export type ElementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    /**
     * Filter, which Elements to fetch.
     */
    where: ElementsWhereUniqueInput
  }

  /**
   * Elements findUniqueOrThrow
   */
  export type ElementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    /**
     * Filter, which Elements to fetch.
     */
    where: ElementsWhereUniqueInput
  }

  /**
   * Elements findFirst
   */
  export type ElementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    /**
     * Filter, which Elements to fetch.
     */
    where?: ElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementsOrderByWithRelationInput | ElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elements.
     */
    cursor?: ElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elements.
     */
    distinct?: ElementsScalarFieldEnum | ElementsScalarFieldEnum[]
  }

  /**
   * Elements findFirstOrThrow
   */
  export type ElementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    /**
     * Filter, which Elements to fetch.
     */
    where?: ElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementsOrderByWithRelationInput | ElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elements.
     */
    cursor?: ElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elements.
     */
    distinct?: ElementsScalarFieldEnum | ElementsScalarFieldEnum[]
  }

  /**
   * Elements findMany
   */
  export type ElementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    /**
     * Filter, which Elements to fetch.
     */
    where?: ElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elements to fetch.
     */
    orderBy?: ElementsOrderByWithRelationInput | ElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Elements.
     */
    cursor?: ElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elements.
     */
    skip?: number
    distinct?: ElementsScalarFieldEnum | ElementsScalarFieldEnum[]
  }

  /**
   * Elements create
   */
  export type ElementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Elements.
     */
    data: XOR<ElementsCreateInput, ElementsUncheckedCreateInput>
  }

  /**
   * Elements createMany
   */
  export type ElementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Elements.
     */
    data: ElementsCreateManyInput | ElementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Elements createManyAndReturn
   */
  export type ElementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * The data used to create many Elements.
     */
    data: ElementsCreateManyInput | ElementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Elements update
   */
  export type ElementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Elements.
     */
    data: XOR<ElementsUpdateInput, ElementsUncheckedUpdateInput>
    /**
     * Choose, which Elements to update.
     */
    where: ElementsWhereUniqueInput
  }

  /**
   * Elements updateMany
   */
  export type ElementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Elements.
     */
    data: XOR<ElementsUpdateManyMutationInput, ElementsUncheckedUpdateManyInput>
    /**
     * Filter which Elements to update
     */
    where?: ElementsWhereInput
    /**
     * Limit how many Elements to update.
     */
    limit?: number
  }

  /**
   * Elements updateManyAndReturn
   */
  export type ElementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * The data used to update Elements.
     */
    data: XOR<ElementsUpdateManyMutationInput, ElementsUncheckedUpdateManyInput>
    /**
     * Filter which Elements to update
     */
    where?: ElementsWhereInput
    /**
     * Limit how many Elements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Elements upsert
   */
  export type ElementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Elements to update in case it exists.
     */
    where: ElementsWhereUniqueInput
    /**
     * In case the Elements found by the `where` argument doesn't exist, create a new Elements with this data.
     */
    create: XOR<ElementsCreateInput, ElementsUncheckedCreateInput>
    /**
     * In case the Elements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElementsUpdateInput, ElementsUncheckedUpdateInput>
  }

  /**
   * Elements delete
   */
  export type ElementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
    /**
     * Filter which Elements to delete.
     */
    where: ElementsWhereUniqueInput
  }

  /**
   * Elements deleteMany
   */
  export type ElementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elements to delete
     */
    where?: ElementsWhereInput
    /**
     * Limit how many Elements to delete.
     */
    limit?: number
  }

  /**
   * Elements without action
   */
  export type ElementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elements
     */
    select?: ElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Elements
     */
    omit?: ElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElementsInclude<ExtArgs> | null
  }


  /**
   * Model Layer
   */

  export type AggregateLayer = {
    _count: LayerCountAggregateOutputType | null
    _min: LayerMinAggregateOutputType | null
    _max: LayerMaxAggregateOutputType | null
  }

  export type LayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    active: boolean | null
    directory_id: string | null
    field_id: string | null
  }

  export type LayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    active: boolean | null
    directory_id: string | null
    field_id: string | null
  }

  export type LayerCountAggregateOutputType = {
    id: number
    name: number
    active: number
    directory_id: number
    field_id: number
    _all: number
  }


  export type LayerMinAggregateInputType = {
    id?: true
    name?: true
    active?: true
    directory_id?: true
    field_id?: true
  }

  export type LayerMaxAggregateInputType = {
    id?: true
    name?: true
    active?: true
    directory_id?: true
    field_id?: true
  }

  export type LayerCountAggregateInputType = {
    id?: true
    name?: true
    active?: true
    directory_id?: true
    field_id?: true
    _all?: true
  }

  export type LayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layer to aggregate.
     */
    where?: LayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layers to fetch.
     */
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Layers
    **/
    _count?: true | LayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayerMaxAggregateInputType
  }

  export type GetLayerAggregateType<T extends LayerAggregateArgs> = {
        [P in keyof T & keyof AggregateLayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayer[P]>
      : GetScalarType<T[P], AggregateLayer[P]>
  }




  export type LayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayerWhereInput
    orderBy?: LayerOrderByWithAggregationInput | LayerOrderByWithAggregationInput[]
    by: LayerScalarFieldEnum[] | LayerScalarFieldEnum
    having?: LayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayerCountAggregateInputType | true
    _min?: LayerMinAggregateInputType
    _max?: LayerMaxAggregateInputType
  }

  export type LayerGroupByOutputType = {
    id: string
    name: string
    active: boolean
    directory_id: string
    field_id: string
    _count: LayerCountAggregateOutputType | null
    _min: LayerMinAggregateOutputType | null
    _max: LayerMaxAggregateOutputType | null
  }

  type GetLayerGroupByPayload<T extends LayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayerGroupByOutputType[P]>
            : GetScalarType<T[P], LayerGroupByOutputType[P]>
        }
      >
    >


  export type LayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    directory_id?: boolean
    field_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layer"]>

  export type LayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    directory_id?: boolean
    field_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layer"]>

  export type LayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    directory_id?: boolean
    field_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layer"]>

  export type LayerSelectScalar = {
    id?: boolean
    name?: boolean
    active?: boolean
    directory_id?: boolean
    field_id?: boolean
  }

  export type LayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "active" | "directory_id" | "field_id", ExtArgs["result"]["layer"]>
  export type LayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }
  export type LayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }
  export type LayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
    field?: boolean | DirectoryFieldDefaultArgs<ExtArgs>
  }

  export type $LayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Layer"
    objects: {
      directory: Prisma.$DirectoryPayload<ExtArgs>
      field: Prisma.$DirectoryFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      active: boolean
      directory_id: string
      field_id: string
    }, ExtArgs["result"]["layer"]>
    composites: {}
  }

  type LayerGetPayload<S extends boolean | null | undefined | LayerDefaultArgs> = $Result.GetResult<Prisma.$LayerPayload, S>

  type LayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayerCountAggregateInputType | true
    }

  export interface LayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Layer'], meta: { name: 'Layer' } }
    /**
     * Find zero or one Layer that matches the filter.
     * @param {LayerFindUniqueArgs} args - Arguments to find a Layer
     * @example
     * // Get one Layer
     * const layer = await prisma.layer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayerFindUniqueArgs>(args: SelectSubset<T, LayerFindUniqueArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Layer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayerFindUniqueOrThrowArgs} args - Arguments to find a Layer
     * @example
     * // Get one Layer
     * const layer = await prisma.layer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayerFindUniqueOrThrowArgs>(args: SelectSubset<T, LayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerFindFirstArgs} args - Arguments to find a Layer
     * @example
     * // Get one Layer
     * const layer = await prisma.layer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayerFindFirstArgs>(args?: SelectSubset<T, LayerFindFirstArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerFindFirstOrThrowArgs} args - Arguments to find a Layer
     * @example
     * // Get one Layer
     * const layer = await prisma.layer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayerFindFirstOrThrowArgs>(args?: SelectSubset<T, LayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Layers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Layers
     * const layers = await prisma.layer.findMany()
     * 
     * // Get first 10 Layers
     * const layers = await prisma.layer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layerWithIdOnly = await prisma.layer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayerFindManyArgs>(args?: SelectSubset<T, LayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Layer.
     * @param {LayerCreateArgs} args - Arguments to create a Layer.
     * @example
     * // Create one Layer
     * const Layer = await prisma.layer.create({
     *   data: {
     *     // ... data to create a Layer
     *   }
     * })
     * 
     */
    create<T extends LayerCreateArgs>(args: SelectSubset<T, LayerCreateArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Layers.
     * @param {LayerCreateManyArgs} args - Arguments to create many Layers.
     * @example
     * // Create many Layers
     * const layer = await prisma.layer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayerCreateManyArgs>(args?: SelectSubset<T, LayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Layers and returns the data saved in the database.
     * @param {LayerCreateManyAndReturnArgs} args - Arguments to create many Layers.
     * @example
     * // Create many Layers
     * const layer = await prisma.layer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Layers and only return the `id`
     * const layerWithIdOnly = await prisma.layer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayerCreateManyAndReturnArgs>(args?: SelectSubset<T, LayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Layer.
     * @param {LayerDeleteArgs} args - Arguments to delete one Layer.
     * @example
     * // Delete one Layer
     * const Layer = await prisma.layer.delete({
     *   where: {
     *     // ... filter to delete one Layer
     *   }
     * })
     * 
     */
    delete<T extends LayerDeleteArgs>(args: SelectSubset<T, LayerDeleteArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Layer.
     * @param {LayerUpdateArgs} args - Arguments to update one Layer.
     * @example
     * // Update one Layer
     * const layer = await prisma.layer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayerUpdateArgs>(args: SelectSubset<T, LayerUpdateArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Layers.
     * @param {LayerDeleteManyArgs} args - Arguments to filter Layers to delete.
     * @example
     * // Delete a few Layers
     * const { count } = await prisma.layer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayerDeleteManyArgs>(args?: SelectSubset<T, LayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Layers
     * const layer = await prisma.layer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayerUpdateManyArgs>(args: SelectSubset<T, LayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layers and returns the data updated in the database.
     * @param {LayerUpdateManyAndReturnArgs} args - Arguments to update many Layers.
     * @example
     * // Update many Layers
     * const layer = await prisma.layer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Layers and only return the `id`
     * const layerWithIdOnly = await prisma.layer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LayerUpdateManyAndReturnArgs>(args: SelectSubset<T, LayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Layer.
     * @param {LayerUpsertArgs} args - Arguments to update or create a Layer.
     * @example
     * // Update or create a Layer
     * const layer = await prisma.layer.upsert({
     *   create: {
     *     // ... data to create a Layer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Layer we want to update
     *   }
     * })
     */
    upsert<T extends LayerUpsertArgs>(args: SelectSubset<T, LayerUpsertArgs<ExtArgs>>): Prisma__LayerClient<$Result.GetResult<Prisma.$LayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Layers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerCountArgs} args - Arguments to filter Layers to count.
     * @example
     * // Count the number of Layers
     * const count = await prisma.layer.count({
     *   where: {
     *     // ... the filter for the Layers we want to count
     *   }
     * })
    **/
    count<T extends LayerCountArgs>(
      args?: Subset<T, LayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Layer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LayerAggregateArgs>(args: Subset<T, LayerAggregateArgs>): Prisma.PrismaPromise<GetLayerAggregateType<T>>

    /**
     * Group by Layer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayerGroupByArgs['orderBy'] }
        : { orderBy?: LayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Layer model
   */
  readonly fields: LayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Layer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    directory<T extends DirectoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryDefaultArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends DirectoryFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryFieldDefaultArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Layer model
   */
  interface LayerFieldRefs {
    readonly id: FieldRef<"Layer", 'String'>
    readonly name: FieldRef<"Layer", 'String'>
    readonly active: FieldRef<"Layer", 'Boolean'>
    readonly directory_id: FieldRef<"Layer", 'String'>
    readonly field_id: FieldRef<"Layer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Layer findUnique
   */
  export type LayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layer to fetch.
     */
    where: LayerWhereUniqueInput
  }

  /**
   * Layer findUniqueOrThrow
   */
  export type LayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layer to fetch.
     */
    where: LayerWhereUniqueInput
  }

  /**
   * Layer findFirst
   */
  export type LayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layer to fetch.
     */
    where?: LayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layers to fetch.
     */
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layers.
     */
    cursor?: LayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layers.
     */
    distinct?: LayerScalarFieldEnum | LayerScalarFieldEnum[]
  }

  /**
   * Layer findFirstOrThrow
   */
  export type LayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layer to fetch.
     */
    where?: LayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layers to fetch.
     */
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layers.
     */
    cursor?: LayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layers.
     */
    distinct?: LayerScalarFieldEnum | LayerScalarFieldEnum[]
  }

  /**
   * Layer findMany
   */
  export type LayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter, which Layers to fetch.
     */
    where?: LayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layers to fetch.
     */
    orderBy?: LayerOrderByWithRelationInput | LayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Layers.
     */
    cursor?: LayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layers.
     */
    skip?: number
    distinct?: LayerScalarFieldEnum | LayerScalarFieldEnum[]
  }

  /**
   * Layer create
   */
  export type LayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Layer.
     */
    data: XOR<LayerCreateInput, LayerUncheckedCreateInput>
  }

  /**
   * Layer createMany
   */
  export type LayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Layers.
     */
    data: LayerCreateManyInput | LayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Layer createManyAndReturn
   */
  export type LayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * The data used to create many Layers.
     */
    data: LayerCreateManyInput | LayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Layer update
   */
  export type LayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Layer.
     */
    data: XOR<LayerUpdateInput, LayerUncheckedUpdateInput>
    /**
     * Choose, which Layer to update.
     */
    where: LayerWhereUniqueInput
  }

  /**
   * Layer updateMany
   */
  export type LayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Layers.
     */
    data: XOR<LayerUpdateManyMutationInput, LayerUncheckedUpdateManyInput>
    /**
     * Filter which Layers to update
     */
    where?: LayerWhereInput
    /**
     * Limit how many Layers to update.
     */
    limit?: number
  }

  /**
   * Layer updateManyAndReturn
   */
  export type LayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * The data used to update Layers.
     */
    data: XOR<LayerUpdateManyMutationInput, LayerUncheckedUpdateManyInput>
    /**
     * Filter which Layers to update
     */
    where?: LayerWhereInput
    /**
     * Limit how many Layers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Layer upsert
   */
  export type LayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Layer to update in case it exists.
     */
    where: LayerWhereUniqueInput
    /**
     * In case the Layer found by the `where` argument doesn't exist, create a new Layer with this data.
     */
    create: XOR<LayerCreateInput, LayerUncheckedCreateInput>
    /**
     * In case the Layer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayerUpdateInput, LayerUncheckedUpdateInput>
  }

  /**
   * Layer delete
   */
  export type LayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
    /**
     * Filter which Layer to delete.
     */
    where: LayerWhereUniqueInput
  }

  /**
   * Layer deleteMany
   */
  export type LayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layers to delete
     */
    where?: LayerWhereInput
    /**
     * Limit how many Layers to delete.
     */
    limit?: number
  }

  /**
   * Layer without action
   */
  export type LayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layer
     */
    select?: LayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layer
     */
    omit?: LayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DirectoryFieldConstraintScalarFieldEnum: {
    id: 'id',
    field_id: 'field_id'
  };

  export type DirectoryFieldConstraintScalarFieldEnum = (typeof DirectoryFieldConstraintScalarFieldEnum)[keyof typeof DirectoryFieldConstraintScalarFieldEnum]


  export const IntegerFieldConstraintScalarFieldEnum: {
    id: 'id',
    min_value: 'min_value',
    max_value: 'max_value',
    default_value: 'default_value',
    constraint_id: 'constraint_id'
  };

  export type IntegerFieldConstraintScalarFieldEnum = (typeof IntegerFieldConstraintScalarFieldEnum)[keyof typeof IntegerFieldConstraintScalarFieldEnum]


  export const StringFieldContraintScalarFieldEnum: {
    id: 'id',
    min_length: 'min_length',
    max_length: 'max_length',
    default_value: 'default_value',
    constraint_id: 'constraint_id'
  };

  export type StringFieldContraintScalarFieldEnum = (typeof StringFieldContraintScalarFieldEnum)[keyof typeof StringFieldContraintScalarFieldEnum]


  export const DateFieldContraintScalarFieldEnum: {
    id: 'id',
    min_value: 'min_value',
    max_value: 'max_value',
    default_value: 'default_value',
    constraint_id: 'constraint_id'
  };

  export type DateFieldContraintScalarFieldEnum = (typeof DateFieldContraintScalarFieldEnum)[keyof typeof DateFieldContraintScalarFieldEnum]


  export const DateTimeFieldContraintScalarFieldEnum: {
    id: 'id',
    min_value: 'min_value',
    max_value: 'max_value',
    default_value: 'default_value',
    constraint_id: 'constraint_id'
  };

  export type DateTimeFieldContraintScalarFieldEnum = (typeof DateTimeFieldContraintScalarFieldEnum)[keyof typeof DateTimeFieldContraintScalarFieldEnum]


  export const TimeFieldContraintScalarFieldEnum: {
    id: 'id',
    min_value: 'min_value',
    max_value: 'max_value',
    default_value: 'default_value',
    constraint_id: 'constraint_id'
  };

  export type TimeFieldContraintScalarFieldEnum = (typeof TimeFieldContraintScalarFieldEnum)[keyof typeof TimeFieldContraintScalarFieldEnum]


  export const PointFieldContraintScalarFieldEnum: {
    id: 'id',
    constraint_id: 'constraint_id'
  };

  export type PointFieldContraintScalarFieldEnum = (typeof PointFieldContraintScalarFieldEnum)[keyof typeof PointFieldContraintScalarFieldEnum]


  export const LineStringFieldContraintScalarFieldEnum: {
    id: 'id',
    constraint_id: 'constraint_id'
  };

  export type LineStringFieldContraintScalarFieldEnum = (typeof LineStringFieldContraintScalarFieldEnum)[keyof typeof LineStringFieldContraintScalarFieldEnum]


  export const PolygonFieldContraintScalarFieldEnum: {
    id: 'id',
    constraint_id: 'constraint_id'
  };

  export type PolygonFieldContraintScalarFieldEnum = (typeof PolygonFieldContraintScalarFieldEnum)[keyof typeof PolygonFieldContraintScalarFieldEnum]


  export const DirectoryFieldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    type: 'type',
    required: 'required',
    order: 'order',
    show_in_list: 'show_in_list',
    directory_id: 'directory_id'
  };

  export type DirectoryFieldScalarFieldEnum = (typeof DirectoryFieldScalarFieldEnum)[keyof typeof DirectoryFieldScalarFieldEnum]


  export const DirectoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type DirectoryScalarFieldEnum = (typeof DirectoryScalarFieldEnum)[keyof typeof DirectoryScalarFieldEnum]


  export const ElementsScalarFieldEnum: {
    id: 'id',
    data: 'data',
    is_valid: 'is_valid',
    directory_id: 'directory_id'
  };

  export type ElementsScalarFieldEnum = (typeof ElementsScalarFieldEnum)[keyof typeof ElementsScalarFieldEnum]


  export const LayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    active: 'active',
    directory_id: 'directory_id',
    field_id: 'field_id'
  };

  export type LayerScalarFieldEnum = (typeof LayerScalarFieldEnum)[keyof typeof LayerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DirectoryFieldType'
   */
  export type EnumDirectoryFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DirectoryFieldType'>
    


  /**
   * Reference to a field of type 'DirectoryFieldType[]'
   */
  export type ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DirectoryFieldType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DirectoryFieldConstraintWhereInput = {
    AND?: DirectoryFieldConstraintWhereInput | DirectoryFieldConstraintWhereInput[]
    OR?: DirectoryFieldConstraintWhereInput[]
    NOT?: DirectoryFieldConstraintWhereInput | DirectoryFieldConstraintWhereInput[]
    id?: StringFilter<"DirectoryFieldConstraint"> | string
    field_id?: StringFilter<"DirectoryFieldConstraint"> | string
    field?: XOR<DirectoryFieldScalarRelationFilter, DirectoryFieldWhereInput>
    integer_constraint?: XOR<IntegerFieldConstraintNullableScalarRelationFilter, IntegerFieldConstraintWhereInput> | null
    string_constraint?: XOR<StringFieldContraintNullableScalarRelationFilter, StringFieldContraintWhereInput> | null
    date_constraint?: XOR<DateFieldContraintNullableScalarRelationFilter, DateFieldContraintWhereInput> | null
    datetime_constraint?: XOR<DateTimeFieldContraintNullableScalarRelationFilter, DateTimeFieldContraintWhereInput> | null
    time_constraint?: XOR<TimeFieldContraintNullableScalarRelationFilter, TimeFieldContraintWhereInput> | null
    point_constraint?: XOR<PointFieldContraintNullableScalarRelationFilter, PointFieldContraintWhereInput> | null
    linestring_constraint?: XOR<LineStringFieldContraintNullableScalarRelationFilter, LineStringFieldContraintWhereInput> | null
    polygon_constraint?: XOR<PolygonFieldContraintNullableScalarRelationFilter, PolygonFieldContraintWhereInput> | null
  }

  export type DirectoryFieldConstraintOrderByWithRelationInput = {
    id?: SortOrder
    field_id?: SortOrder
    field?: DirectoryFieldOrderByWithRelationInput
    integer_constraint?: IntegerFieldConstraintOrderByWithRelationInput
    string_constraint?: StringFieldContraintOrderByWithRelationInput
    date_constraint?: DateFieldContraintOrderByWithRelationInput
    datetime_constraint?: DateTimeFieldContraintOrderByWithRelationInput
    time_constraint?: TimeFieldContraintOrderByWithRelationInput
    point_constraint?: PointFieldContraintOrderByWithRelationInput
    linestring_constraint?: LineStringFieldContraintOrderByWithRelationInput
    polygon_constraint?: PolygonFieldContraintOrderByWithRelationInput
  }

  export type DirectoryFieldConstraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    field_id?: string
    AND?: DirectoryFieldConstraintWhereInput | DirectoryFieldConstraintWhereInput[]
    OR?: DirectoryFieldConstraintWhereInput[]
    NOT?: DirectoryFieldConstraintWhereInput | DirectoryFieldConstraintWhereInput[]
    field?: XOR<DirectoryFieldScalarRelationFilter, DirectoryFieldWhereInput>
    integer_constraint?: XOR<IntegerFieldConstraintNullableScalarRelationFilter, IntegerFieldConstraintWhereInput> | null
    string_constraint?: XOR<StringFieldContraintNullableScalarRelationFilter, StringFieldContraintWhereInput> | null
    date_constraint?: XOR<DateFieldContraintNullableScalarRelationFilter, DateFieldContraintWhereInput> | null
    datetime_constraint?: XOR<DateTimeFieldContraintNullableScalarRelationFilter, DateTimeFieldContraintWhereInput> | null
    time_constraint?: XOR<TimeFieldContraintNullableScalarRelationFilter, TimeFieldContraintWhereInput> | null
    point_constraint?: XOR<PointFieldContraintNullableScalarRelationFilter, PointFieldContraintWhereInput> | null
    linestring_constraint?: XOR<LineStringFieldContraintNullableScalarRelationFilter, LineStringFieldContraintWhereInput> | null
    polygon_constraint?: XOR<PolygonFieldContraintNullableScalarRelationFilter, PolygonFieldContraintWhereInput> | null
  }, "id" | "field_id">

  export type DirectoryFieldConstraintOrderByWithAggregationInput = {
    id?: SortOrder
    field_id?: SortOrder
    _count?: DirectoryFieldConstraintCountOrderByAggregateInput
    _max?: DirectoryFieldConstraintMaxOrderByAggregateInput
    _min?: DirectoryFieldConstraintMinOrderByAggregateInput
  }

  export type DirectoryFieldConstraintScalarWhereWithAggregatesInput = {
    AND?: DirectoryFieldConstraintScalarWhereWithAggregatesInput | DirectoryFieldConstraintScalarWhereWithAggregatesInput[]
    OR?: DirectoryFieldConstraintScalarWhereWithAggregatesInput[]
    NOT?: DirectoryFieldConstraintScalarWhereWithAggregatesInput | DirectoryFieldConstraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DirectoryFieldConstraint"> | string
    field_id?: StringWithAggregatesFilter<"DirectoryFieldConstraint"> | string
  }

  export type IntegerFieldConstraintWhereInput = {
    AND?: IntegerFieldConstraintWhereInput | IntegerFieldConstraintWhereInput[]
    OR?: IntegerFieldConstraintWhereInput[]
    NOT?: IntegerFieldConstraintWhereInput | IntegerFieldConstraintWhereInput[]
    id?: StringFilter<"IntegerFieldConstraint"> | string
    min_value?: IntNullableFilter<"IntegerFieldConstraint"> | number | null
    max_value?: IntNullableFilter<"IntegerFieldConstraint"> | number | null
    default_value?: IntNullableFilter<"IntegerFieldConstraint"> | number | null
    constraint_id?: StringFilter<"IntegerFieldConstraint"> | string
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }

  export type IntegerFieldConstraintOrderByWithRelationInput = {
    id?: SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    constraint?: DirectoryFieldConstraintOrderByWithRelationInput
  }

  export type IntegerFieldConstraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    constraint_id?: string
    AND?: IntegerFieldConstraintWhereInput | IntegerFieldConstraintWhereInput[]
    OR?: IntegerFieldConstraintWhereInput[]
    NOT?: IntegerFieldConstraintWhereInput | IntegerFieldConstraintWhereInput[]
    min_value?: IntNullableFilter<"IntegerFieldConstraint"> | number | null
    max_value?: IntNullableFilter<"IntegerFieldConstraint"> | number | null
    default_value?: IntNullableFilter<"IntegerFieldConstraint"> | number | null
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }, "id" | "constraint_id">

  export type IntegerFieldConstraintOrderByWithAggregationInput = {
    id?: SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    _count?: IntegerFieldConstraintCountOrderByAggregateInput
    _avg?: IntegerFieldConstraintAvgOrderByAggregateInput
    _max?: IntegerFieldConstraintMaxOrderByAggregateInput
    _min?: IntegerFieldConstraintMinOrderByAggregateInput
    _sum?: IntegerFieldConstraintSumOrderByAggregateInput
  }

  export type IntegerFieldConstraintScalarWhereWithAggregatesInput = {
    AND?: IntegerFieldConstraintScalarWhereWithAggregatesInput | IntegerFieldConstraintScalarWhereWithAggregatesInput[]
    OR?: IntegerFieldConstraintScalarWhereWithAggregatesInput[]
    NOT?: IntegerFieldConstraintScalarWhereWithAggregatesInput | IntegerFieldConstraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntegerFieldConstraint"> | string
    min_value?: IntNullableWithAggregatesFilter<"IntegerFieldConstraint"> | number | null
    max_value?: IntNullableWithAggregatesFilter<"IntegerFieldConstraint"> | number | null
    default_value?: IntNullableWithAggregatesFilter<"IntegerFieldConstraint"> | number | null
    constraint_id?: StringWithAggregatesFilter<"IntegerFieldConstraint"> | string
  }

  export type StringFieldContraintWhereInput = {
    AND?: StringFieldContraintWhereInput | StringFieldContraintWhereInput[]
    OR?: StringFieldContraintWhereInput[]
    NOT?: StringFieldContraintWhereInput | StringFieldContraintWhereInput[]
    id?: StringFilter<"StringFieldContraint"> | string
    min_length?: IntNullableFilter<"StringFieldContraint"> | number | null
    max_length?: IntNullableFilter<"StringFieldContraint"> | number | null
    default_value?: StringNullableFilter<"StringFieldContraint"> | string | null
    constraint_id?: StringFilter<"StringFieldContraint"> | string
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }

  export type StringFieldContraintOrderByWithRelationInput = {
    id?: SortOrder
    min_length?: SortOrderInput | SortOrder
    max_length?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    constraint?: DirectoryFieldConstraintOrderByWithRelationInput
  }

  export type StringFieldContraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    constraint_id?: string
    AND?: StringFieldContraintWhereInput | StringFieldContraintWhereInput[]
    OR?: StringFieldContraintWhereInput[]
    NOT?: StringFieldContraintWhereInput | StringFieldContraintWhereInput[]
    min_length?: IntNullableFilter<"StringFieldContraint"> | number | null
    max_length?: IntNullableFilter<"StringFieldContraint"> | number | null
    default_value?: StringNullableFilter<"StringFieldContraint"> | string | null
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }, "id" | "constraint_id">

  export type StringFieldContraintOrderByWithAggregationInput = {
    id?: SortOrder
    min_length?: SortOrderInput | SortOrder
    max_length?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    _count?: StringFieldContraintCountOrderByAggregateInput
    _avg?: StringFieldContraintAvgOrderByAggregateInput
    _max?: StringFieldContraintMaxOrderByAggregateInput
    _min?: StringFieldContraintMinOrderByAggregateInput
    _sum?: StringFieldContraintSumOrderByAggregateInput
  }

  export type StringFieldContraintScalarWhereWithAggregatesInput = {
    AND?: StringFieldContraintScalarWhereWithAggregatesInput | StringFieldContraintScalarWhereWithAggregatesInput[]
    OR?: StringFieldContraintScalarWhereWithAggregatesInput[]
    NOT?: StringFieldContraintScalarWhereWithAggregatesInput | StringFieldContraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StringFieldContraint"> | string
    min_length?: IntNullableWithAggregatesFilter<"StringFieldContraint"> | number | null
    max_length?: IntNullableWithAggregatesFilter<"StringFieldContraint"> | number | null
    default_value?: StringNullableWithAggregatesFilter<"StringFieldContraint"> | string | null
    constraint_id?: StringWithAggregatesFilter<"StringFieldContraint"> | string
  }

  export type DateFieldContraintWhereInput = {
    AND?: DateFieldContraintWhereInput | DateFieldContraintWhereInput[]
    OR?: DateFieldContraintWhereInput[]
    NOT?: DateFieldContraintWhereInput | DateFieldContraintWhereInput[]
    id?: StringFilter<"DateFieldContraint"> | string
    min_value?: StringNullableFilter<"DateFieldContraint"> | string | null
    max_value?: StringNullableFilter<"DateFieldContraint"> | string | null
    default_value?: StringNullableFilter<"DateFieldContraint"> | string | null
    constraint_id?: StringFilter<"DateFieldContraint"> | string
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }

  export type DateFieldContraintOrderByWithRelationInput = {
    id?: SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    constraint?: DirectoryFieldConstraintOrderByWithRelationInput
  }

  export type DateFieldContraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    constraint_id?: string
    AND?: DateFieldContraintWhereInput | DateFieldContraintWhereInput[]
    OR?: DateFieldContraintWhereInput[]
    NOT?: DateFieldContraintWhereInput | DateFieldContraintWhereInput[]
    min_value?: StringNullableFilter<"DateFieldContraint"> | string | null
    max_value?: StringNullableFilter<"DateFieldContraint"> | string | null
    default_value?: StringNullableFilter<"DateFieldContraint"> | string | null
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }, "id" | "constraint_id">

  export type DateFieldContraintOrderByWithAggregationInput = {
    id?: SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    _count?: DateFieldContraintCountOrderByAggregateInput
    _max?: DateFieldContraintMaxOrderByAggregateInput
    _min?: DateFieldContraintMinOrderByAggregateInput
  }

  export type DateFieldContraintScalarWhereWithAggregatesInput = {
    AND?: DateFieldContraintScalarWhereWithAggregatesInput | DateFieldContraintScalarWhereWithAggregatesInput[]
    OR?: DateFieldContraintScalarWhereWithAggregatesInput[]
    NOT?: DateFieldContraintScalarWhereWithAggregatesInput | DateFieldContraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DateFieldContraint"> | string
    min_value?: StringNullableWithAggregatesFilter<"DateFieldContraint"> | string | null
    max_value?: StringNullableWithAggregatesFilter<"DateFieldContraint"> | string | null
    default_value?: StringNullableWithAggregatesFilter<"DateFieldContraint"> | string | null
    constraint_id?: StringWithAggregatesFilter<"DateFieldContraint"> | string
  }

  export type DateTimeFieldContraintWhereInput = {
    AND?: DateTimeFieldContraintWhereInput | DateTimeFieldContraintWhereInput[]
    OR?: DateTimeFieldContraintWhereInput[]
    NOT?: DateTimeFieldContraintWhereInput | DateTimeFieldContraintWhereInput[]
    id?: StringFilter<"DateTimeFieldContraint"> | string
    min_value?: DateTimeNullableFilter<"DateTimeFieldContraint"> | Date | string | null
    max_value?: DateTimeNullableFilter<"DateTimeFieldContraint"> | Date | string | null
    default_value?: DateTimeNullableFilter<"DateTimeFieldContraint"> | Date | string | null
    constraint_id?: StringFilter<"DateTimeFieldContraint"> | string
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }

  export type DateTimeFieldContraintOrderByWithRelationInput = {
    id?: SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    constraint?: DirectoryFieldConstraintOrderByWithRelationInput
  }

  export type DateTimeFieldContraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    constraint_id?: string
    AND?: DateTimeFieldContraintWhereInput | DateTimeFieldContraintWhereInput[]
    OR?: DateTimeFieldContraintWhereInput[]
    NOT?: DateTimeFieldContraintWhereInput | DateTimeFieldContraintWhereInput[]
    min_value?: DateTimeNullableFilter<"DateTimeFieldContraint"> | Date | string | null
    max_value?: DateTimeNullableFilter<"DateTimeFieldContraint"> | Date | string | null
    default_value?: DateTimeNullableFilter<"DateTimeFieldContraint"> | Date | string | null
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }, "id" | "constraint_id">

  export type DateTimeFieldContraintOrderByWithAggregationInput = {
    id?: SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    _count?: DateTimeFieldContraintCountOrderByAggregateInput
    _max?: DateTimeFieldContraintMaxOrderByAggregateInput
    _min?: DateTimeFieldContraintMinOrderByAggregateInput
  }

  export type DateTimeFieldContraintScalarWhereWithAggregatesInput = {
    AND?: DateTimeFieldContraintScalarWhereWithAggregatesInput | DateTimeFieldContraintScalarWhereWithAggregatesInput[]
    OR?: DateTimeFieldContraintScalarWhereWithAggregatesInput[]
    NOT?: DateTimeFieldContraintScalarWhereWithAggregatesInput | DateTimeFieldContraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DateTimeFieldContraint"> | string
    min_value?: DateTimeNullableWithAggregatesFilter<"DateTimeFieldContraint"> | Date | string | null
    max_value?: DateTimeNullableWithAggregatesFilter<"DateTimeFieldContraint"> | Date | string | null
    default_value?: DateTimeNullableWithAggregatesFilter<"DateTimeFieldContraint"> | Date | string | null
    constraint_id?: StringWithAggregatesFilter<"DateTimeFieldContraint"> | string
  }

  export type TimeFieldContraintWhereInput = {
    AND?: TimeFieldContraintWhereInput | TimeFieldContraintWhereInput[]
    OR?: TimeFieldContraintWhereInput[]
    NOT?: TimeFieldContraintWhereInput | TimeFieldContraintWhereInput[]
    id?: StringFilter<"TimeFieldContraint"> | string
    min_value?: StringNullableFilter<"TimeFieldContraint"> | string | null
    max_value?: StringNullableFilter<"TimeFieldContraint"> | string | null
    default_value?: StringNullableFilter<"TimeFieldContraint"> | string | null
    constraint_id?: StringFilter<"TimeFieldContraint"> | string
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }

  export type TimeFieldContraintOrderByWithRelationInput = {
    id?: SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    constraint?: DirectoryFieldConstraintOrderByWithRelationInput
  }

  export type TimeFieldContraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    constraint_id?: string
    AND?: TimeFieldContraintWhereInput | TimeFieldContraintWhereInput[]
    OR?: TimeFieldContraintWhereInput[]
    NOT?: TimeFieldContraintWhereInput | TimeFieldContraintWhereInput[]
    min_value?: StringNullableFilter<"TimeFieldContraint"> | string | null
    max_value?: StringNullableFilter<"TimeFieldContraint"> | string | null
    default_value?: StringNullableFilter<"TimeFieldContraint"> | string | null
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }, "id" | "constraint_id">

  export type TimeFieldContraintOrderByWithAggregationInput = {
    id?: SortOrder
    min_value?: SortOrderInput | SortOrder
    max_value?: SortOrderInput | SortOrder
    default_value?: SortOrderInput | SortOrder
    constraint_id?: SortOrder
    _count?: TimeFieldContraintCountOrderByAggregateInput
    _max?: TimeFieldContraintMaxOrderByAggregateInput
    _min?: TimeFieldContraintMinOrderByAggregateInput
  }

  export type TimeFieldContraintScalarWhereWithAggregatesInput = {
    AND?: TimeFieldContraintScalarWhereWithAggregatesInput | TimeFieldContraintScalarWhereWithAggregatesInput[]
    OR?: TimeFieldContraintScalarWhereWithAggregatesInput[]
    NOT?: TimeFieldContraintScalarWhereWithAggregatesInput | TimeFieldContraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeFieldContraint"> | string
    min_value?: StringNullableWithAggregatesFilter<"TimeFieldContraint"> | string | null
    max_value?: StringNullableWithAggregatesFilter<"TimeFieldContraint"> | string | null
    default_value?: StringNullableWithAggregatesFilter<"TimeFieldContraint"> | string | null
    constraint_id?: StringWithAggregatesFilter<"TimeFieldContraint"> | string
  }

  export type PointFieldContraintWhereInput = {
    AND?: PointFieldContraintWhereInput | PointFieldContraintWhereInput[]
    OR?: PointFieldContraintWhereInput[]
    NOT?: PointFieldContraintWhereInput | PointFieldContraintWhereInput[]
    id?: StringFilter<"PointFieldContraint"> | string
    constraint_id?: StringFilter<"PointFieldContraint"> | string
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }

  export type PointFieldContraintOrderByWithRelationInput = {
    id?: SortOrder
    constraint_id?: SortOrder
    constraint?: DirectoryFieldConstraintOrderByWithRelationInput
  }

  export type PointFieldContraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    constraint_id?: string
    AND?: PointFieldContraintWhereInput | PointFieldContraintWhereInput[]
    OR?: PointFieldContraintWhereInput[]
    NOT?: PointFieldContraintWhereInput | PointFieldContraintWhereInput[]
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }, "id" | "constraint_id">

  export type PointFieldContraintOrderByWithAggregationInput = {
    id?: SortOrder
    constraint_id?: SortOrder
    _count?: PointFieldContraintCountOrderByAggregateInput
    _max?: PointFieldContraintMaxOrderByAggregateInput
    _min?: PointFieldContraintMinOrderByAggregateInput
  }

  export type PointFieldContraintScalarWhereWithAggregatesInput = {
    AND?: PointFieldContraintScalarWhereWithAggregatesInput | PointFieldContraintScalarWhereWithAggregatesInput[]
    OR?: PointFieldContraintScalarWhereWithAggregatesInput[]
    NOT?: PointFieldContraintScalarWhereWithAggregatesInput | PointFieldContraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PointFieldContraint"> | string
    constraint_id?: StringWithAggregatesFilter<"PointFieldContraint"> | string
  }

  export type LineStringFieldContraintWhereInput = {
    AND?: LineStringFieldContraintWhereInput | LineStringFieldContraintWhereInput[]
    OR?: LineStringFieldContraintWhereInput[]
    NOT?: LineStringFieldContraintWhereInput | LineStringFieldContraintWhereInput[]
    id?: StringFilter<"LineStringFieldContraint"> | string
    constraint_id?: StringFilter<"LineStringFieldContraint"> | string
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }

  export type LineStringFieldContraintOrderByWithRelationInput = {
    id?: SortOrder
    constraint_id?: SortOrder
    constraint?: DirectoryFieldConstraintOrderByWithRelationInput
  }

  export type LineStringFieldContraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    constraint_id?: string
    AND?: LineStringFieldContraintWhereInput | LineStringFieldContraintWhereInput[]
    OR?: LineStringFieldContraintWhereInput[]
    NOT?: LineStringFieldContraintWhereInput | LineStringFieldContraintWhereInput[]
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }, "id" | "constraint_id">

  export type LineStringFieldContraintOrderByWithAggregationInput = {
    id?: SortOrder
    constraint_id?: SortOrder
    _count?: LineStringFieldContraintCountOrderByAggregateInput
    _max?: LineStringFieldContraintMaxOrderByAggregateInput
    _min?: LineStringFieldContraintMinOrderByAggregateInput
  }

  export type LineStringFieldContraintScalarWhereWithAggregatesInput = {
    AND?: LineStringFieldContraintScalarWhereWithAggregatesInput | LineStringFieldContraintScalarWhereWithAggregatesInput[]
    OR?: LineStringFieldContraintScalarWhereWithAggregatesInput[]
    NOT?: LineStringFieldContraintScalarWhereWithAggregatesInput | LineStringFieldContraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LineStringFieldContraint"> | string
    constraint_id?: StringWithAggregatesFilter<"LineStringFieldContraint"> | string
  }

  export type PolygonFieldContraintWhereInput = {
    AND?: PolygonFieldContraintWhereInput | PolygonFieldContraintWhereInput[]
    OR?: PolygonFieldContraintWhereInput[]
    NOT?: PolygonFieldContraintWhereInput | PolygonFieldContraintWhereInput[]
    id?: StringFilter<"PolygonFieldContraint"> | string
    constraint_id?: StringFilter<"PolygonFieldContraint"> | string
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }

  export type PolygonFieldContraintOrderByWithRelationInput = {
    id?: SortOrder
    constraint_id?: SortOrder
    constraint?: DirectoryFieldConstraintOrderByWithRelationInput
  }

  export type PolygonFieldContraintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    constraint_id?: string
    AND?: PolygonFieldContraintWhereInput | PolygonFieldContraintWhereInput[]
    OR?: PolygonFieldContraintWhereInput[]
    NOT?: PolygonFieldContraintWhereInput | PolygonFieldContraintWhereInput[]
    constraint?: XOR<DirectoryFieldConstraintScalarRelationFilter, DirectoryFieldConstraintWhereInput>
  }, "id" | "constraint_id">

  export type PolygonFieldContraintOrderByWithAggregationInput = {
    id?: SortOrder
    constraint_id?: SortOrder
    _count?: PolygonFieldContraintCountOrderByAggregateInput
    _max?: PolygonFieldContraintMaxOrderByAggregateInput
    _min?: PolygonFieldContraintMinOrderByAggregateInput
  }

  export type PolygonFieldContraintScalarWhereWithAggregatesInput = {
    AND?: PolygonFieldContraintScalarWhereWithAggregatesInput | PolygonFieldContraintScalarWhereWithAggregatesInput[]
    OR?: PolygonFieldContraintScalarWhereWithAggregatesInput[]
    NOT?: PolygonFieldContraintScalarWhereWithAggregatesInput | PolygonFieldContraintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PolygonFieldContraint"> | string
    constraint_id?: StringWithAggregatesFilter<"PolygonFieldContraint"> | string
  }

  export type DirectoryFieldWhereInput = {
    AND?: DirectoryFieldWhereInput | DirectoryFieldWhereInput[]
    OR?: DirectoryFieldWhereInput[]
    NOT?: DirectoryFieldWhereInput | DirectoryFieldWhereInput[]
    id?: StringFilter<"DirectoryField"> | string
    name?: StringFilter<"DirectoryField"> | string
    code?: StringFilter<"DirectoryField"> | string
    type?: EnumDirectoryFieldTypeFilter<"DirectoryField"> | $Enums.DirectoryFieldType
    required?: BoolFilter<"DirectoryField"> | boolean
    order?: IntFilter<"DirectoryField"> | number
    show_in_list?: BoolFilter<"DirectoryField"> | boolean
    directory_id?: StringFilter<"DirectoryField"> | string
    directory?: XOR<DirectoryScalarRelationFilter, DirectoryWhereInput>
    constraint?: XOR<DirectoryFieldConstraintNullableScalarRelationFilter, DirectoryFieldConstraintWhereInput> | null
    layers?: LayerListRelationFilter
  }

  export type DirectoryFieldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
    directory?: DirectoryOrderByWithRelationInput
    constraint?: DirectoryFieldConstraintOrderByWithRelationInput
    layers?: LayerOrderByRelationAggregateInput
  }

  export type DirectoryFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DirectoryFieldWhereInput | DirectoryFieldWhereInput[]
    OR?: DirectoryFieldWhereInput[]
    NOT?: DirectoryFieldWhereInput | DirectoryFieldWhereInput[]
    name?: StringFilter<"DirectoryField"> | string
    code?: StringFilter<"DirectoryField"> | string
    type?: EnumDirectoryFieldTypeFilter<"DirectoryField"> | $Enums.DirectoryFieldType
    required?: BoolFilter<"DirectoryField"> | boolean
    order?: IntFilter<"DirectoryField"> | number
    show_in_list?: BoolFilter<"DirectoryField"> | boolean
    directory_id?: StringFilter<"DirectoryField"> | string
    directory?: XOR<DirectoryScalarRelationFilter, DirectoryWhereInput>
    constraint?: XOR<DirectoryFieldConstraintNullableScalarRelationFilter, DirectoryFieldConstraintWhereInput> | null
    layers?: LayerListRelationFilter
  }, "id">

  export type DirectoryFieldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
    _count?: DirectoryFieldCountOrderByAggregateInput
    _avg?: DirectoryFieldAvgOrderByAggregateInput
    _max?: DirectoryFieldMaxOrderByAggregateInput
    _min?: DirectoryFieldMinOrderByAggregateInput
    _sum?: DirectoryFieldSumOrderByAggregateInput
  }

  export type DirectoryFieldScalarWhereWithAggregatesInput = {
    AND?: DirectoryFieldScalarWhereWithAggregatesInput | DirectoryFieldScalarWhereWithAggregatesInput[]
    OR?: DirectoryFieldScalarWhereWithAggregatesInput[]
    NOT?: DirectoryFieldScalarWhereWithAggregatesInput | DirectoryFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DirectoryField"> | string
    name?: StringWithAggregatesFilter<"DirectoryField"> | string
    code?: StringWithAggregatesFilter<"DirectoryField"> | string
    type?: EnumDirectoryFieldTypeWithAggregatesFilter<"DirectoryField"> | $Enums.DirectoryFieldType
    required?: BoolWithAggregatesFilter<"DirectoryField"> | boolean
    order?: IntWithAggregatesFilter<"DirectoryField"> | number
    show_in_list?: BoolWithAggregatesFilter<"DirectoryField"> | boolean
    directory_id?: StringWithAggregatesFilter<"DirectoryField"> | string
  }

  export type DirectoryWhereInput = {
    AND?: DirectoryWhereInput | DirectoryWhereInput[]
    OR?: DirectoryWhereInput[]
    NOT?: DirectoryWhereInput | DirectoryWhereInput[]
    id?: StringFilter<"Directory"> | string
    name?: StringFilter<"Directory"> | string
    description?: StringNullableFilter<"Directory"> | string | null
    fields?: DirectoryFieldListRelationFilter
    elements?: ElementsListRelationFilter
    layers?: LayerListRelationFilter
  }

  export type DirectoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fields?: DirectoryFieldOrderByRelationAggregateInput
    elements?: ElementsOrderByRelationAggregateInput
    layers?: LayerOrderByRelationAggregateInput
  }

  export type DirectoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DirectoryWhereInput | DirectoryWhereInput[]
    OR?: DirectoryWhereInput[]
    NOT?: DirectoryWhereInput | DirectoryWhereInput[]
    name?: StringFilter<"Directory"> | string
    description?: StringNullableFilter<"Directory"> | string | null
    fields?: DirectoryFieldListRelationFilter
    elements?: ElementsListRelationFilter
    layers?: LayerListRelationFilter
  }, "id">

  export type DirectoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: DirectoryCountOrderByAggregateInput
    _max?: DirectoryMaxOrderByAggregateInput
    _min?: DirectoryMinOrderByAggregateInput
  }

  export type DirectoryScalarWhereWithAggregatesInput = {
    AND?: DirectoryScalarWhereWithAggregatesInput | DirectoryScalarWhereWithAggregatesInput[]
    OR?: DirectoryScalarWhereWithAggregatesInput[]
    NOT?: DirectoryScalarWhereWithAggregatesInput | DirectoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Directory"> | string
    name?: StringWithAggregatesFilter<"Directory"> | string
    description?: StringNullableWithAggregatesFilter<"Directory"> | string | null
  }

  export type ElementsWhereInput = {
    AND?: ElementsWhereInput | ElementsWhereInput[]
    OR?: ElementsWhereInput[]
    NOT?: ElementsWhereInput | ElementsWhereInput[]
    id?: StringFilter<"Elements"> | string
    data?: JsonFilter<"Elements">
    is_valid?: BoolFilter<"Elements"> | boolean
    directory_id?: StringFilter<"Elements"> | string
    directory?: XOR<DirectoryScalarRelationFilter, DirectoryWhereInput>
  }

  export type ElementsOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    is_valid?: SortOrder
    directory_id?: SortOrder
    directory?: DirectoryOrderByWithRelationInput
  }

  export type ElementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ElementsWhereInput | ElementsWhereInput[]
    OR?: ElementsWhereInput[]
    NOT?: ElementsWhereInput | ElementsWhereInput[]
    data?: JsonFilter<"Elements">
    is_valid?: BoolFilter<"Elements"> | boolean
    directory_id?: StringFilter<"Elements"> | string
    directory?: XOR<DirectoryScalarRelationFilter, DirectoryWhereInput>
  }, "id">

  export type ElementsOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    is_valid?: SortOrder
    directory_id?: SortOrder
    _count?: ElementsCountOrderByAggregateInput
    _max?: ElementsMaxOrderByAggregateInput
    _min?: ElementsMinOrderByAggregateInput
  }

  export type ElementsScalarWhereWithAggregatesInput = {
    AND?: ElementsScalarWhereWithAggregatesInput | ElementsScalarWhereWithAggregatesInput[]
    OR?: ElementsScalarWhereWithAggregatesInput[]
    NOT?: ElementsScalarWhereWithAggregatesInput | ElementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Elements"> | string
    data?: JsonWithAggregatesFilter<"Elements">
    is_valid?: BoolWithAggregatesFilter<"Elements"> | boolean
    directory_id?: StringWithAggregatesFilter<"Elements"> | string
  }

  export type LayerWhereInput = {
    AND?: LayerWhereInput | LayerWhereInput[]
    OR?: LayerWhereInput[]
    NOT?: LayerWhereInput | LayerWhereInput[]
    id?: StringFilter<"Layer"> | string
    name?: StringFilter<"Layer"> | string
    active?: BoolFilter<"Layer"> | boolean
    directory_id?: StringFilter<"Layer"> | string
    field_id?: StringFilter<"Layer"> | string
    directory?: XOR<DirectoryScalarRelationFilter, DirectoryWhereInput>
    field?: XOR<DirectoryFieldScalarRelationFilter, DirectoryFieldWhereInput>
  }

  export type LayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    directory_id?: SortOrder
    field_id?: SortOrder
    directory?: DirectoryOrderByWithRelationInput
    field?: DirectoryFieldOrderByWithRelationInput
  }

  export type LayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LayerWhereInput | LayerWhereInput[]
    OR?: LayerWhereInput[]
    NOT?: LayerWhereInput | LayerWhereInput[]
    name?: StringFilter<"Layer"> | string
    active?: BoolFilter<"Layer"> | boolean
    directory_id?: StringFilter<"Layer"> | string
    field_id?: StringFilter<"Layer"> | string
    directory?: XOR<DirectoryScalarRelationFilter, DirectoryWhereInput>
    field?: XOR<DirectoryFieldScalarRelationFilter, DirectoryFieldWhereInput>
  }, "id">

  export type LayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    directory_id?: SortOrder
    field_id?: SortOrder
    _count?: LayerCountOrderByAggregateInput
    _max?: LayerMaxOrderByAggregateInput
    _min?: LayerMinOrderByAggregateInput
  }

  export type LayerScalarWhereWithAggregatesInput = {
    AND?: LayerScalarWhereWithAggregatesInput | LayerScalarWhereWithAggregatesInput[]
    OR?: LayerScalarWhereWithAggregatesInput[]
    NOT?: LayerScalarWhereWithAggregatesInput | LayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Layer"> | string
    name?: StringWithAggregatesFilter<"Layer"> | string
    active?: BoolWithAggregatesFilter<"Layer"> | boolean
    directory_id?: StringWithAggregatesFilter<"Layer"> | string
    field_id?: StringWithAggregatesFilter<"Layer"> | string
  }

  export type DirectoryFieldConstraintCreateInput = {
    id?: string
    field: DirectoryFieldCreateNestedOneWithoutConstraintInput
    integer_constraint?: IntegerFieldConstraintCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateInput = {
    id?: string
    field_id: string
    integer_constraint?: IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput
    integer_constraint?: IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintCreateManyInput = {
    id?: string
    field_id: string
  }

  export type DirectoryFieldConstraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type DirectoryFieldConstraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
  }

  export type IntegerFieldConstraintCreateInput = {
    id?: string
    min_value?: number | null
    max_value?: number | null
    default_value?: number | null
    constraint: DirectoryFieldConstraintCreateNestedOneWithoutInteger_constraintInput
  }

  export type IntegerFieldConstraintUncheckedCreateInput = {
    id?: string
    min_value?: number | null
    max_value?: number | null
    default_value?: number | null
    constraint_id: string
  }

  export type IntegerFieldConstraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableIntFieldUpdateOperationsInput | number | null
    max_value?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableIntFieldUpdateOperationsInput | number | null
    constraint?: DirectoryFieldConstraintUpdateOneRequiredWithoutInteger_constraintNestedInput
  }

  export type IntegerFieldConstraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableIntFieldUpdateOperationsInput | number | null
    max_value?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableIntFieldUpdateOperationsInput | number | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type IntegerFieldConstraintCreateManyInput = {
    id?: string
    min_value?: number | null
    max_value?: number | null
    default_value?: number | null
    constraint_id: string
  }

  export type IntegerFieldConstraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableIntFieldUpdateOperationsInput | number | null
    max_value?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntegerFieldConstraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableIntFieldUpdateOperationsInput | number | null
    max_value?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableIntFieldUpdateOperationsInput | number | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFieldContraintCreateInput = {
    id?: string
    min_length?: number | null
    max_length?: number | null
    default_value?: string | null
    constraint: DirectoryFieldConstraintCreateNestedOneWithoutString_constraintInput
  }

  export type StringFieldContraintUncheckedCreateInput = {
    id?: string
    min_length?: number | null
    max_length?: number | null
    default_value?: string | null
    constraint_id: string
  }

  export type StringFieldContraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_length?: NullableIntFieldUpdateOperationsInput | number | null
    max_length?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    constraint?: DirectoryFieldConstraintUpdateOneRequiredWithoutString_constraintNestedInput
  }

  export type StringFieldContraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_length?: NullableIntFieldUpdateOperationsInput | number | null
    max_length?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFieldContraintCreateManyInput = {
    id?: string
    min_length?: number | null
    max_length?: number | null
    default_value?: string | null
    constraint_id: string
  }

  export type StringFieldContraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_length?: NullableIntFieldUpdateOperationsInput | number | null
    max_length?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFieldContraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_length?: NullableIntFieldUpdateOperationsInput | number | null
    max_length?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type DateFieldContraintCreateInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
    constraint: DirectoryFieldConstraintCreateNestedOneWithoutDate_constraintInput
  }

  export type DateFieldContraintUncheckedCreateInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
    constraint_id: string
  }

  export type DateFieldContraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    constraint?: DirectoryFieldConstraintUpdateOneRequiredWithoutDate_constraintNestedInput
  }

  export type DateFieldContraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type DateFieldContraintCreateManyInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
    constraint_id: string
  }

  export type DateFieldContraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateFieldContraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type DateTimeFieldContraintCreateInput = {
    id?: string
    min_value?: Date | string | null
    max_value?: Date | string | null
    default_value?: Date | string | null
    constraint: DirectoryFieldConstraintCreateNestedOneWithoutDatetime_constraintInput
  }

  export type DateTimeFieldContraintUncheckedCreateInput = {
    id?: string
    min_value?: Date | string | null
    max_value?: Date | string | null
    default_value?: Date | string | null
    constraint_id: string
  }

  export type DateTimeFieldContraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    constraint?: DirectoryFieldConstraintUpdateOneRequiredWithoutDatetime_constraintNestedInput
  }

  export type DateTimeFieldContraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type DateTimeFieldContraintCreateManyInput = {
    id?: string
    min_value?: Date | string | null
    max_value?: Date | string | null
    default_value?: Date | string | null
    constraint_id: string
  }

  export type DateTimeFieldContraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DateTimeFieldContraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type TimeFieldContraintCreateInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
    constraint: DirectoryFieldConstraintCreateNestedOneWithoutTime_constraintInput
  }

  export type TimeFieldContraintUncheckedCreateInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
    constraint_id: string
  }

  export type TimeFieldContraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    constraint?: DirectoryFieldConstraintUpdateOneRequiredWithoutTime_constraintNestedInput
  }

  export type TimeFieldContraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type TimeFieldContraintCreateManyInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
    constraint_id: string
  }

  export type TimeFieldContraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeFieldContraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type PointFieldContraintCreateInput = {
    id?: string
    constraint: DirectoryFieldConstraintCreateNestedOneWithoutPoint_constraintInput
  }

  export type PointFieldContraintUncheckedCreateInput = {
    id?: string
    constraint_id: string
  }

  export type PointFieldContraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    constraint?: DirectoryFieldConstraintUpdateOneRequiredWithoutPoint_constraintNestedInput
  }

  export type PointFieldContraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type PointFieldContraintCreateManyInput = {
    id?: string
    constraint_id: string
  }

  export type PointFieldContraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PointFieldContraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type LineStringFieldContraintCreateInput = {
    id?: string
    constraint: DirectoryFieldConstraintCreateNestedOneWithoutLinestring_constraintInput
  }

  export type LineStringFieldContraintUncheckedCreateInput = {
    id?: string
    constraint_id: string
  }

  export type LineStringFieldContraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    constraint?: DirectoryFieldConstraintUpdateOneRequiredWithoutLinestring_constraintNestedInput
  }

  export type LineStringFieldContraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type LineStringFieldContraintCreateManyInput = {
    id?: string
    constraint_id: string
  }

  export type LineStringFieldContraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LineStringFieldContraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type PolygonFieldContraintCreateInput = {
    id?: string
    constraint: DirectoryFieldConstraintCreateNestedOneWithoutPolygon_constraintInput
  }

  export type PolygonFieldContraintUncheckedCreateInput = {
    id?: string
    constraint_id: string
  }

  export type PolygonFieldContraintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    constraint?: DirectoryFieldConstraintUpdateOneRequiredWithoutPolygon_constraintNestedInput
  }

  export type PolygonFieldContraintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type PolygonFieldContraintCreateManyInput = {
    id?: string
    constraint_id: string
  }

  export type PolygonFieldContraintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PolygonFieldContraintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    constraint_id?: StringFieldUpdateOperationsInput | string
  }

  export type DirectoryFieldCreateInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
    directory: DirectoryCreateNestedOneWithoutFieldsInput
    constraint?: DirectoryFieldConstraintCreateNestedOneWithoutFieldInput
    layers?: LayerCreateNestedManyWithoutFieldInput
  }

  export type DirectoryFieldUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
    directory_id: string
    constraint?: DirectoryFieldConstraintUncheckedCreateNestedOneWithoutFieldInput
    layers?: LayerUncheckedCreateNestedManyWithoutFieldInput
  }

  export type DirectoryFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory?: DirectoryUpdateOneRequiredWithoutFieldsNestedInput
    constraint?: DirectoryFieldConstraintUpdateOneWithoutFieldNestedInput
    layers?: LayerUpdateManyWithoutFieldNestedInput
  }

  export type DirectoryFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
    constraint?: DirectoryFieldConstraintUncheckedUpdateOneWithoutFieldNestedInput
    layers?: LayerUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type DirectoryFieldCreateManyInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
    directory_id: string
  }

  export type DirectoryFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectoryFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
  }

  export type DirectoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    fields?: DirectoryFieldCreateNestedManyWithoutDirectoryInput
    elements?: ElementsCreateNestedManyWithoutDirectoryInput
    layers?: LayerCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    fields?: DirectoryFieldUncheckedCreateNestedManyWithoutDirectoryInput
    elements?: ElementsUncheckedCreateNestedManyWithoutDirectoryInput
    layers?: LayerUncheckedCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: DirectoryFieldUpdateManyWithoutDirectoryNestedInput
    elements?: ElementsUpdateManyWithoutDirectoryNestedInput
    layers?: LayerUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: DirectoryFieldUncheckedUpdateManyWithoutDirectoryNestedInput
    elements?: ElementsUncheckedUpdateManyWithoutDirectoryNestedInput
    layers?: LayerUncheckedUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type DirectoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DirectoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ElementsCreateInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    is_valid?: boolean
    directory: DirectoryCreateNestedOneWithoutElementsInput
  }

  export type ElementsUncheckedCreateInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    is_valid?: boolean
    directory_id: string
  }

  export type ElementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    is_valid?: BoolFieldUpdateOperationsInput | boolean
    directory?: DirectoryUpdateOneRequiredWithoutElementsNestedInput
  }

  export type ElementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    is_valid?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
  }

  export type ElementsCreateManyInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    is_valid?: boolean
    directory_id: string
  }

  export type ElementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    is_valid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ElementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    is_valid?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
  }

  export type LayerCreateInput = {
    id?: string
    name: string
    active?: boolean
    directory: DirectoryCreateNestedOneWithoutLayersInput
    field: DirectoryFieldCreateNestedOneWithoutLayersInput
  }

  export type LayerUncheckedCreateInput = {
    id?: string
    name: string
    active?: boolean
    directory_id: string
    field_id: string
  }

  export type LayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    directory?: DirectoryUpdateOneRequiredWithoutLayersNestedInput
    field?: DirectoryFieldUpdateOneRequiredWithoutLayersNestedInput
  }

  export type LayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
  }

  export type LayerCreateManyInput = {
    id?: string
    name: string
    active?: boolean
    directory_id: string
    field_id: string
  }

  export type LayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DirectoryFieldScalarRelationFilter = {
    is?: DirectoryFieldWhereInput
    isNot?: DirectoryFieldWhereInput
  }

  export type IntegerFieldConstraintNullableScalarRelationFilter = {
    is?: IntegerFieldConstraintWhereInput | null
    isNot?: IntegerFieldConstraintWhereInput | null
  }

  export type StringFieldContraintNullableScalarRelationFilter = {
    is?: StringFieldContraintWhereInput | null
    isNot?: StringFieldContraintWhereInput | null
  }

  export type DateFieldContraintNullableScalarRelationFilter = {
    is?: DateFieldContraintWhereInput | null
    isNot?: DateFieldContraintWhereInput | null
  }

  export type DateTimeFieldContraintNullableScalarRelationFilter = {
    is?: DateTimeFieldContraintWhereInput | null
    isNot?: DateTimeFieldContraintWhereInput | null
  }

  export type TimeFieldContraintNullableScalarRelationFilter = {
    is?: TimeFieldContraintWhereInput | null
    isNot?: TimeFieldContraintWhereInput | null
  }

  export type PointFieldContraintNullableScalarRelationFilter = {
    is?: PointFieldContraintWhereInput | null
    isNot?: PointFieldContraintWhereInput | null
  }

  export type LineStringFieldContraintNullableScalarRelationFilter = {
    is?: LineStringFieldContraintWhereInput | null
    isNot?: LineStringFieldContraintWhereInput | null
  }

  export type PolygonFieldContraintNullableScalarRelationFilter = {
    is?: PolygonFieldContraintWhereInput | null
    isNot?: PolygonFieldContraintWhereInput | null
  }

  export type DirectoryFieldConstraintCountOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
  }

  export type DirectoryFieldConstraintMaxOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
  }

  export type DirectoryFieldConstraintMinOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DirectoryFieldConstraintScalarRelationFilter = {
    is?: DirectoryFieldConstraintWhereInput
    isNot?: DirectoryFieldConstraintWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IntegerFieldConstraintCountOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type IntegerFieldConstraintAvgOrderByAggregateInput = {
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
  }

  export type IntegerFieldConstraintMaxOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type IntegerFieldConstraintMinOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type IntegerFieldConstraintSumOrderByAggregateInput = {
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFieldContraintCountOrderByAggregateInput = {
    id?: SortOrder
    min_length?: SortOrder
    max_length?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type StringFieldContraintAvgOrderByAggregateInput = {
    min_length?: SortOrder
    max_length?: SortOrder
  }

  export type StringFieldContraintMaxOrderByAggregateInput = {
    id?: SortOrder
    min_length?: SortOrder
    max_length?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type StringFieldContraintMinOrderByAggregateInput = {
    id?: SortOrder
    min_length?: SortOrder
    max_length?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type StringFieldContraintSumOrderByAggregateInput = {
    min_length?: SortOrder
    max_length?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateFieldContraintCountOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type DateFieldContraintMaxOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type DateFieldContraintMinOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFieldContraintCountOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type DateTimeFieldContraintMaxOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type DateTimeFieldContraintMinOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TimeFieldContraintCountOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type TimeFieldContraintMaxOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type TimeFieldContraintMinOrderByAggregateInput = {
    id?: SortOrder
    min_value?: SortOrder
    max_value?: SortOrder
    default_value?: SortOrder
    constraint_id?: SortOrder
  }

  export type PointFieldContraintCountOrderByAggregateInput = {
    id?: SortOrder
    constraint_id?: SortOrder
  }

  export type PointFieldContraintMaxOrderByAggregateInput = {
    id?: SortOrder
    constraint_id?: SortOrder
  }

  export type PointFieldContraintMinOrderByAggregateInput = {
    id?: SortOrder
    constraint_id?: SortOrder
  }

  export type LineStringFieldContraintCountOrderByAggregateInput = {
    id?: SortOrder
    constraint_id?: SortOrder
  }

  export type LineStringFieldContraintMaxOrderByAggregateInput = {
    id?: SortOrder
    constraint_id?: SortOrder
  }

  export type LineStringFieldContraintMinOrderByAggregateInput = {
    id?: SortOrder
    constraint_id?: SortOrder
  }

  export type PolygonFieldContraintCountOrderByAggregateInput = {
    id?: SortOrder
    constraint_id?: SortOrder
  }

  export type PolygonFieldContraintMaxOrderByAggregateInput = {
    id?: SortOrder
    constraint_id?: SortOrder
  }

  export type PolygonFieldContraintMinOrderByAggregateInput = {
    id?: SortOrder
    constraint_id?: SortOrder
  }

  export type EnumDirectoryFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DirectoryFieldType | EnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel> | $Enums.DirectoryFieldType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DirectoryScalarRelationFilter = {
    is?: DirectoryWhereInput
    isNot?: DirectoryWhereInput
  }

  export type DirectoryFieldConstraintNullableScalarRelationFilter = {
    is?: DirectoryFieldConstraintWhereInput | null
    isNot?: DirectoryFieldConstraintWhereInput | null
  }

  export type LayerListRelationFilter = {
    every?: LayerWhereInput
    some?: LayerWhereInput
    none?: LayerWhereInput
  }

  export type LayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectoryFieldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
  }

  export type DirectoryFieldAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DirectoryFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
  }

  export type DirectoryFieldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
  }

  export type DirectoryFieldSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumDirectoryFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DirectoryFieldType | EnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectoryFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.DirectoryFieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DirectoryFieldListRelationFilter = {
    every?: DirectoryFieldWhereInput
    some?: DirectoryFieldWhereInput
    none?: DirectoryFieldWhereInput
  }

  export type ElementsListRelationFilter = {
    every?: ElementsWhereInput
    some?: ElementsWhereInput
    none?: ElementsWhereInput
  }

  export type DirectoryFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DirectoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DirectoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ElementsCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    is_valid?: SortOrder
    directory_id?: SortOrder
  }

  export type ElementsMaxOrderByAggregateInput = {
    id?: SortOrder
    is_valid?: SortOrder
    directory_id?: SortOrder
  }

  export type ElementsMinOrderByAggregateInput = {
    id?: SortOrder
    is_valid?: SortOrder
    directory_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type LayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    directory_id?: SortOrder
    field_id?: SortOrder
  }

  export type LayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    directory_id?: SortOrder
    field_id?: SortOrder
  }

  export type LayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    directory_id?: SortOrder
    field_id?: SortOrder
  }

  export type DirectoryFieldCreateNestedOneWithoutConstraintInput = {
    create?: XOR<DirectoryFieldCreateWithoutConstraintInput, DirectoryFieldUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutConstraintInput
    connect?: DirectoryFieldWhereUniqueInput
  }

  export type IntegerFieldConstraintCreateNestedOneWithoutConstraintInput = {
    create?: XOR<IntegerFieldConstraintCreateWithoutConstraintInput, IntegerFieldConstraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: IntegerFieldConstraintCreateOrConnectWithoutConstraintInput
    connect?: IntegerFieldConstraintWhereUniqueInput
  }

  export type StringFieldContraintCreateNestedOneWithoutConstraintInput = {
    create?: XOR<StringFieldContraintCreateWithoutConstraintInput, StringFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: StringFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: StringFieldContraintWhereUniqueInput
  }

  export type DateFieldContraintCreateNestedOneWithoutConstraintInput = {
    create?: XOR<DateFieldContraintCreateWithoutConstraintInput, DateFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DateFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: DateFieldContraintWhereUniqueInput
  }

  export type DateTimeFieldContraintCreateNestedOneWithoutConstraintInput = {
    create?: XOR<DateTimeFieldContraintCreateWithoutConstraintInput, DateTimeFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DateTimeFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: DateTimeFieldContraintWhereUniqueInput
  }

  export type TimeFieldContraintCreateNestedOneWithoutConstraintInput = {
    create?: XOR<TimeFieldContraintCreateWithoutConstraintInput, TimeFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: TimeFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: TimeFieldContraintWhereUniqueInput
  }

  export type PointFieldContraintCreateNestedOneWithoutConstraintInput = {
    create?: XOR<PointFieldContraintCreateWithoutConstraintInput, PointFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: PointFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: PointFieldContraintWhereUniqueInput
  }

  export type LineStringFieldContraintCreateNestedOneWithoutConstraintInput = {
    create?: XOR<LineStringFieldContraintCreateWithoutConstraintInput, LineStringFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: LineStringFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: LineStringFieldContraintWhereUniqueInput
  }

  export type PolygonFieldContraintCreateNestedOneWithoutConstraintInput = {
    create?: XOR<PolygonFieldContraintCreateWithoutConstraintInput, PolygonFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: PolygonFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: PolygonFieldContraintWhereUniqueInput
  }

  export type IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput = {
    create?: XOR<IntegerFieldConstraintCreateWithoutConstraintInput, IntegerFieldConstraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: IntegerFieldConstraintCreateOrConnectWithoutConstraintInput
    connect?: IntegerFieldConstraintWhereUniqueInput
  }

  export type StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput = {
    create?: XOR<StringFieldContraintCreateWithoutConstraintInput, StringFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: StringFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: StringFieldContraintWhereUniqueInput
  }

  export type DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput = {
    create?: XOR<DateFieldContraintCreateWithoutConstraintInput, DateFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DateFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: DateFieldContraintWhereUniqueInput
  }

  export type DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput = {
    create?: XOR<DateTimeFieldContraintCreateWithoutConstraintInput, DateTimeFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DateTimeFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: DateTimeFieldContraintWhereUniqueInput
  }

  export type TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput = {
    create?: XOR<TimeFieldContraintCreateWithoutConstraintInput, TimeFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: TimeFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: TimeFieldContraintWhereUniqueInput
  }

  export type PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput = {
    create?: XOR<PointFieldContraintCreateWithoutConstraintInput, PointFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: PointFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: PointFieldContraintWhereUniqueInput
  }

  export type LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput = {
    create?: XOR<LineStringFieldContraintCreateWithoutConstraintInput, LineStringFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: LineStringFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: LineStringFieldContraintWhereUniqueInput
  }

  export type PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput = {
    create?: XOR<PolygonFieldContraintCreateWithoutConstraintInput, PolygonFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: PolygonFieldContraintCreateOrConnectWithoutConstraintInput
    connect?: PolygonFieldContraintWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput = {
    create?: XOR<DirectoryFieldCreateWithoutConstraintInput, DirectoryFieldUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutConstraintInput
    upsert?: DirectoryFieldUpsertWithoutConstraintInput
    connect?: DirectoryFieldWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldUpdateToOneWithWhereWithoutConstraintInput, DirectoryFieldUpdateWithoutConstraintInput>, DirectoryFieldUncheckedUpdateWithoutConstraintInput>
  }

  export type IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<IntegerFieldConstraintCreateWithoutConstraintInput, IntegerFieldConstraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: IntegerFieldConstraintCreateOrConnectWithoutConstraintInput
    upsert?: IntegerFieldConstraintUpsertWithoutConstraintInput
    disconnect?: IntegerFieldConstraintWhereInput | boolean
    delete?: IntegerFieldConstraintWhereInput | boolean
    connect?: IntegerFieldConstraintWhereUniqueInput
    update?: XOR<XOR<IntegerFieldConstraintUpdateToOneWithWhereWithoutConstraintInput, IntegerFieldConstraintUpdateWithoutConstraintInput>, IntegerFieldConstraintUncheckedUpdateWithoutConstraintInput>
  }

  export type StringFieldContraintUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<StringFieldContraintCreateWithoutConstraintInput, StringFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: StringFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: StringFieldContraintUpsertWithoutConstraintInput
    disconnect?: StringFieldContraintWhereInput | boolean
    delete?: StringFieldContraintWhereInput | boolean
    connect?: StringFieldContraintWhereUniqueInput
    update?: XOR<XOR<StringFieldContraintUpdateToOneWithWhereWithoutConstraintInput, StringFieldContraintUpdateWithoutConstraintInput>, StringFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type DateFieldContraintUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<DateFieldContraintCreateWithoutConstraintInput, DateFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DateFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: DateFieldContraintUpsertWithoutConstraintInput
    disconnect?: DateFieldContraintWhereInput | boolean
    delete?: DateFieldContraintWhereInput | boolean
    connect?: DateFieldContraintWhereUniqueInput
    update?: XOR<XOR<DateFieldContraintUpdateToOneWithWhereWithoutConstraintInput, DateFieldContraintUpdateWithoutConstraintInput>, DateFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<DateTimeFieldContraintCreateWithoutConstraintInput, DateTimeFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DateTimeFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: DateTimeFieldContraintUpsertWithoutConstraintInput
    disconnect?: DateTimeFieldContraintWhereInput | boolean
    delete?: DateTimeFieldContraintWhereInput | boolean
    connect?: DateTimeFieldContraintWhereUniqueInput
    update?: XOR<XOR<DateTimeFieldContraintUpdateToOneWithWhereWithoutConstraintInput, DateTimeFieldContraintUpdateWithoutConstraintInput>, DateTimeFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type TimeFieldContraintUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<TimeFieldContraintCreateWithoutConstraintInput, TimeFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: TimeFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: TimeFieldContraintUpsertWithoutConstraintInput
    disconnect?: TimeFieldContraintWhereInput | boolean
    delete?: TimeFieldContraintWhereInput | boolean
    connect?: TimeFieldContraintWhereUniqueInput
    update?: XOR<XOR<TimeFieldContraintUpdateToOneWithWhereWithoutConstraintInput, TimeFieldContraintUpdateWithoutConstraintInput>, TimeFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type PointFieldContraintUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<PointFieldContraintCreateWithoutConstraintInput, PointFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: PointFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: PointFieldContraintUpsertWithoutConstraintInput
    disconnect?: PointFieldContraintWhereInput | boolean
    delete?: PointFieldContraintWhereInput | boolean
    connect?: PointFieldContraintWhereUniqueInput
    update?: XOR<XOR<PointFieldContraintUpdateToOneWithWhereWithoutConstraintInput, PointFieldContraintUpdateWithoutConstraintInput>, PointFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type LineStringFieldContraintUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<LineStringFieldContraintCreateWithoutConstraintInput, LineStringFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: LineStringFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: LineStringFieldContraintUpsertWithoutConstraintInput
    disconnect?: LineStringFieldContraintWhereInput | boolean
    delete?: LineStringFieldContraintWhereInput | boolean
    connect?: LineStringFieldContraintWhereUniqueInput
    update?: XOR<XOR<LineStringFieldContraintUpdateToOneWithWhereWithoutConstraintInput, LineStringFieldContraintUpdateWithoutConstraintInput>, LineStringFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type PolygonFieldContraintUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<PolygonFieldContraintCreateWithoutConstraintInput, PolygonFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: PolygonFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: PolygonFieldContraintUpsertWithoutConstraintInput
    disconnect?: PolygonFieldContraintWhereInput | boolean
    delete?: PolygonFieldContraintWhereInput | boolean
    connect?: PolygonFieldContraintWhereUniqueInput
    update?: XOR<XOR<PolygonFieldContraintUpdateToOneWithWhereWithoutConstraintInput, PolygonFieldContraintUpdateWithoutConstraintInput>, PolygonFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<IntegerFieldConstraintCreateWithoutConstraintInput, IntegerFieldConstraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: IntegerFieldConstraintCreateOrConnectWithoutConstraintInput
    upsert?: IntegerFieldConstraintUpsertWithoutConstraintInput
    disconnect?: IntegerFieldConstraintWhereInput | boolean
    delete?: IntegerFieldConstraintWhereInput | boolean
    connect?: IntegerFieldConstraintWhereUniqueInput
    update?: XOR<XOR<IntegerFieldConstraintUpdateToOneWithWhereWithoutConstraintInput, IntegerFieldConstraintUpdateWithoutConstraintInput>, IntegerFieldConstraintUncheckedUpdateWithoutConstraintInput>
  }

  export type StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<StringFieldContraintCreateWithoutConstraintInput, StringFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: StringFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: StringFieldContraintUpsertWithoutConstraintInput
    disconnect?: StringFieldContraintWhereInput | boolean
    delete?: StringFieldContraintWhereInput | boolean
    connect?: StringFieldContraintWhereUniqueInput
    update?: XOR<XOR<StringFieldContraintUpdateToOneWithWhereWithoutConstraintInput, StringFieldContraintUpdateWithoutConstraintInput>, StringFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<DateFieldContraintCreateWithoutConstraintInput, DateFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DateFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: DateFieldContraintUpsertWithoutConstraintInput
    disconnect?: DateFieldContraintWhereInput | boolean
    delete?: DateFieldContraintWhereInput | boolean
    connect?: DateFieldContraintWhereUniqueInput
    update?: XOR<XOR<DateFieldContraintUpdateToOneWithWhereWithoutConstraintInput, DateFieldContraintUpdateWithoutConstraintInput>, DateFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<DateTimeFieldContraintCreateWithoutConstraintInput, DateTimeFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: DateTimeFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: DateTimeFieldContraintUpsertWithoutConstraintInput
    disconnect?: DateTimeFieldContraintWhereInput | boolean
    delete?: DateTimeFieldContraintWhereInput | boolean
    connect?: DateTimeFieldContraintWhereUniqueInput
    update?: XOR<XOR<DateTimeFieldContraintUpdateToOneWithWhereWithoutConstraintInput, DateTimeFieldContraintUpdateWithoutConstraintInput>, DateTimeFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<TimeFieldContraintCreateWithoutConstraintInput, TimeFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: TimeFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: TimeFieldContraintUpsertWithoutConstraintInput
    disconnect?: TimeFieldContraintWhereInput | boolean
    delete?: TimeFieldContraintWhereInput | boolean
    connect?: TimeFieldContraintWhereUniqueInput
    update?: XOR<XOR<TimeFieldContraintUpdateToOneWithWhereWithoutConstraintInput, TimeFieldContraintUpdateWithoutConstraintInput>, TimeFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<PointFieldContraintCreateWithoutConstraintInput, PointFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: PointFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: PointFieldContraintUpsertWithoutConstraintInput
    disconnect?: PointFieldContraintWhereInput | boolean
    delete?: PointFieldContraintWhereInput | boolean
    connect?: PointFieldContraintWhereUniqueInput
    update?: XOR<XOR<PointFieldContraintUpdateToOneWithWhereWithoutConstraintInput, PointFieldContraintUpdateWithoutConstraintInput>, PointFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<LineStringFieldContraintCreateWithoutConstraintInput, LineStringFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: LineStringFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: LineStringFieldContraintUpsertWithoutConstraintInput
    disconnect?: LineStringFieldContraintWhereInput | boolean
    delete?: LineStringFieldContraintWhereInput | boolean
    connect?: LineStringFieldContraintWhereUniqueInput
    update?: XOR<XOR<LineStringFieldContraintUpdateToOneWithWhereWithoutConstraintInput, LineStringFieldContraintUpdateWithoutConstraintInput>, LineStringFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput = {
    create?: XOR<PolygonFieldContraintCreateWithoutConstraintInput, PolygonFieldContraintUncheckedCreateWithoutConstraintInput>
    connectOrCreate?: PolygonFieldContraintCreateOrConnectWithoutConstraintInput
    upsert?: PolygonFieldContraintUpsertWithoutConstraintInput
    disconnect?: PolygonFieldContraintWhereInput | boolean
    delete?: PolygonFieldContraintWhereInput | boolean
    connect?: PolygonFieldContraintWhereUniqueInput
    update?: XOR<XOR<PolygonFieldContraintUpdateToOneWithWhereWithoutConstraintInput, PolygonFieldContraintUpdateWithoutConstraintInput>, PolygonFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type DirectoryFieldConstraintCreateNestedOneWithoutInteger_constraintInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutInteger_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutInteger_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutInteger_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DirectoryFieldConstraintUpdateOneRequiredWithoutInteger_constraintNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutInteger_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutInteger_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutInteger_constraintInput
    upsert?: DirectoryFieldConstraintUpsertWithoutInteger_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutInteger_constraintInput, DirectoryFieldConstraintUpdateWithoutInteger_constraintInput>, DirectoryFieldConstraintUncheckedUpdateWithoutInteger_constraintInput>
  }

  export type DirectoryFieldConstraintCreateNestedOneWithoutString_constraintInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutString_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutString_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutString_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DirectoryFieldConstraintUpdateOneRequiredWithoutString_constraintNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutString_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutString_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutString_constraintInput
    upsert?: DirectoryFieldConstraintUpsertWithoutString_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutString_constraintInput, DirectoryFieldConstraintUpdateWithoutString_constraintInput>, DirectoryFieldConstraintUncheckedUpdateWithoutString_constraintInput>
  }

  export type DirectoryFieldConstraintCreateNestedOneWithoutDate_constraintInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutDate_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutDate_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutDate_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type DirectoryFieldConstraintUpdateOneRequiredWithoutDate_constraintNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutDate_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutDate_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutDate_constraintInput
    upsert?: DirectoryFieldConstraintUpsertWithoutDate_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutDate_constraintInput, DirectoryFieldConstraintUpdateWithoutDate_constraintInput>, DirectoryFieldConstraintUncheckedUpdateWithoutDate_constraintInput>
  }

  export type DirectoryFieldConstraintCreateNestedOneWithoutDatetime_constraintInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutDatetime_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutDatetime_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutDatetime_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DirectoryFieldConstraintUpdateOneRequiredWithoutDatetime_constraintNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutDatetime_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutDatetime_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutDatetime_constraintInput
    upsert?: DirectoryFieldConstraintUpsertWithoutDatetime_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutDatetime_constraintInput, DirectoryFieldConstraintUpdateWithoutDatetime_constraintInput>, DirectoryFieldConstraintUncheckedUpdateWithoutDatetime_constraintInput>
  }

  export type DirectoryFieldConstraintCreateNestedOneWithoutTime_constraintInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutTime_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutTime_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutTime_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type DirectoryFieldConstraintUpdateOneRequiredWithoutTime_constraintNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutTime_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutTime_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutTime_constraintInput
    upsert?: DirectoryFieldConstraintUpsertWithoutTime_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutTime_constraintInput, DirectoryFieldConstraintUpdateWithoutTime_constraintInput>, DirectoryFieldConstraintUncheckedUpdateWithoutTime_constraintInput>
  }

  export type DirectoryFieldConstraintCreateNestedOneWithoutPoint_constraintInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutPoint_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutPoint_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutPoint_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type DirectoryFieldConstraintUpdateOneRequiredWithoutPoint_constraintNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutPoint_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutPoint_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutPoint_constraintInput
    upsert?: DirectoryFieldConstraintUpsertWithoutPoint_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutPoint_constraintInput, DirectoryFieldConstraintUpdateWithoutPoint_constraintInput>, DirectoryFieldConstraintUncheckedUpdateWithoutPoint_constraintInput>
  }

  export type DirectoryFieldConstraintCreateNestedOneWithoutLinestring_constraintInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutLinestring_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutLinestring_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutLinestring_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type DirectoryFieldConstraintUpdateOneRequiredWithoutLinestring_constraintNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutLinestring_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutLinestring_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutLinestring_constraintInput
    upsert?: DirectoryFieldConstraintUpsertWithoutLinestring_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutLinestring_constraintInput, DirectoryFieldConstraintUpdateWithoutLinestring_constraintInput>, DirectoryFieldConstraintUncheckedUpdateWithoutLinestring_constraintInput>
  }

  export type DirectoryFieldConstraintCreateNestedOneWithoutPolygon_constraintInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutPolygon_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutPolygon_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutPolygon_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type DirectoryFieldConstraintUpdateOneRequiredWithoutPolygon_constraintNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutPolygon_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutPolygon_constraintInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutPolygon_constraintInput
    upsert?: DirectoryFieldConstraintUpsertWithoutPolygon_constraintInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutPolygon_constraintInput, DirectoryFieldConstraintUpdateWithoutPolygon_constraintInput>, DirectoryFieldConstraintUncheckedUpdateWithoutPolygon_constraintInput>
  }

  export type DirectoryCreateNestedOneWithoutFieldsInput = {
    create?: XOR<DirectoryCreateWithoutFieldsInput, DirectoryUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: DirectoryCreateOrConnectWithoutFieldsInput
    connect?: DirectoryWhereUniqueInput
  }

  export type DirectoryFieldConstraintCreateNestedOneWithoutFieldInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutFieldInput, DirectoryFieldConstraintUncheckedCreateWithoutFieldInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutFieldInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type LayerCreateNestedManyWithoutFieldInput = {
    create?: XOR<LayerCreateWithoutFieldInput, LayerUncheckedCreateWithoutFieldInput> | LayerCreateWithoutFieldInput[] | LayerUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutFieldInput | LayerCreateOrConnectWithoutFieldInput[]
    createMany?: LayerCreateManyFieldInputEnvelope
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
  }

  export type DirectoryFieldConstraintUncheckedCreateNestedOneWithoutFieldInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutFieldInput, DirectoryFieldConstraintUncheckedCreateWithoutFieldInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutFieldInput
    connect?: DirectoryFieldConstraintWhereUniqueInput
  }

  export type LayerUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<LayerCreateWithoutFieldInput, LayerUncheckedCreateWithoutFieldInput> | LayerCreateWithoutFieldInput[] | LayerUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutFieldInput | LayerCreateOrConnectWithoutFieldInput[]
    createMany?: LayerCreateManyFieldInputEnvelope
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
  }

  export type EnumDirectoryFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.DirectoryFieldType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DirectoryUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<DirectoryCreateWithoutFieldsInput, DirectoryUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: DirectoryCreateOrConnectWithoutFieldsInput
    upsert?: DirectoryUpsertWithoutFieldsInput
    connect?: DirectoryWhereUniqueInput
    update?: XOR<XOR<DirectoryUpdateToOneWithWhereWithoutFieldsInput, DirectoryUpdateWithoutFieldsInput>, DirectoryUncheckedUpdateWithoutFieldsInput>
  }

  export type DirectoryFieldConstraintUpdateOneWithoutFieldNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutFieldInput, DirectoryFieldConstraintUncheckedCreateWithoutFieldInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutFieldInput
    upsert?: DirectoryFieldConstraintUpsertWithoutFieldInput
    disconnect?: DirectoryFieldConstraintWhereInput | boolean
    delete?: DirectoryFieldConstraintWhereInput | boolean
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutFieldInput, DirectoryFieldConstraintUpdateWithoutFieldInput>, DirectoryFieldConstraintUncheckedUpdateWithoutFieldInput>
  }

  export type LayerUpdateManyWithoutFieldNestedInput = {
    create?: XOR<LayerCreateWithoutFieldInput, LayerUncheckedCreateWithoutFieldInput> | LayerCreateWithoutFieldInput[] | LayerUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutFieldInput | LayerCreateOrConnectWithoutFieldInput[]
    upsert?: LayerUpsertWithWhereUniqueWithoutFieldInput | LayerUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: LayerCreateManyFieldInputEnvelope
    set?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    disconnect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    delete?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    update?: LayerUpdateWithWhereUniqueWithoutFieldInput | LayerUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: LayerUpdateManyWithWhereWithoutFieldInput | LayerUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: LayerScalarWhereInput | LayerScalarWhereInput[]
  }

  export type DirectoryFieldConstraintUncheckedUpdateOneWithoutFieldNestedInput = {
    create?: XOR<DirectoryFieldConstraintCreateWithoutFieldInput, DirectoryFieldConstraintUncheckedCreateWithoutFieldInput>
    connectOrCreate?: DirectoryFieldConstraintCreateOrConnectWithoutFieldInput
    upsert?: DirectoryFieldConstraintUpsertWithoutFieldInput
    disconnect?: DirectoryFieldConstraintWhereInput | boolean
    delete?: DirectoryFieldConstraintWhereInput | boolean
    connect?: DirectoryFieldConstraintWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldConstraintUpdateToOneWithWhereWithoutFieldInput, DirectoryFieldConstraintUpdateWithoutFieldInput>, DirectoryFieldConstraintUncheckedUpdateWithoutFieldInput>
  }

  export type LayerUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<LayerCreateWithoutFieldInput, LayerUncheckedCreateWithoutFieldInput> | LayerCreateWithoutFieldInput[] | LayerUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutFieldInput | LayerCreateOrConnectWithoutFieldInput[]
    upsert?: LayerUpsertWithWhereUniqueWithoutFieldInput | LayerUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: LayerCreateManyFieldInputEnvelope
    set?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    disconnect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    delete?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    update?: LayerUpdateWithWhereUniqueWithoutFieldInput | LayerUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: LayerUpdateManyWithWhereWithoutFieldInput | LayerUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: LayerScalarWhereInput | LayerScalarWhereInput[]
  }

  export type DirectoryFieldCreateNestedManyWithoutDirectoryInput = {
    create?: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput> | DirectoryFieldCreateWithoutDirectoryInput[] | DirectoryFieldUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutDirectoryInput | DirectoryFieldCreateOrConnectWithoutDirectoryInput[]
    createMany?: DirectoryFieldCreateManyDirectoryInputEnvelope
    connect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
  }

  export type ElementsCreateNestedManyWithoutDirectoryInput = {
    create?: XOR<ElementsCreateWithoutDirectoryInput, ElementsUncheckedCreateWithoutDirectoryInput> | ElementsCreateWithoutDirectoryInput[] | ElementsUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: ElementsCreateOrConnectWithoutDirectoryInput | ElementsCreateOrConnectWithoutDirectoryInput[]
    createMany?: ElementsCreateManyDirectoryInputEnvelope
    connect?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
  }

  export type LayerCreateNestedManyWithoutDirectoryInput = {
    create?: XOR<LayerCreateWithoutDirectoryInput, LayerUncheckedCreateWithoutDirectoryInput> | LayerCreateWithoutDirectoryInput[] | LayerUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutDirectoryInput | LayerCreateOrConnectWithoutDirectoryInput[]
    createMany?: LayerCreateManyDirectoryInputEnvelope
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
  }

  export type DirectoryFieldUncheckedCreateNestedManyWithoutDirectoryInput = {
    create?: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput> | DirectoryFieldCreateWithoutDirectoryInput[] | DirectoryFieldUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutDirectoryInput | DirectoryFieldCreateOrConnectWithoutDirectoryInput[]
    createMany?: DirectoryFieldCreateManyDirectoryInputEnvelope
    connect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
  }

  export type ElementsUncheckedCreateNestedManyWithoutDirectoryInput = {
    create?: XOR<ElementsCreateWithoutDirectoryInput, ElementsUncheckedCreateWithoutDirectoryInput> | ElementsCreateWithoutDirectoryInput[] | ElementsUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: ElementsCreateOrConnectWithoutDirectoryInput | ElementsCreateOrConnectWithoutDirectoryInput[]
    createMany?: ElementsCreateManyDirectoryInputEnvelope
    connect?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
  }

  export type LayerUncheckedCreateNestedManyWithoutDirectoryInput = {
    create?: XOR<LayerCreateWithoutDirectoryInput, LayerUncheckedCreateWithoutDirectoryInput> | LayerCreateWithoutDirectoryInput[] | LayerUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutDirectoryInput | LayerCreateOrConnectWithoutDirectoryInput[]
    createMany?: LayerCreateManyDirectoryInputEnvelope
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
  }

  export type DirectoryFieldUpdateManyWithoutDirectoryNestedInput = {
    create?: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput> | DirectoryFieldCreateWithoutDirectoryInput[] | DirectoryFieldUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutDirectoryInput | DirectoryFieldCreateOrConnectWithoutDirectoryInput[]
    upsert?: DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput | DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput[]
    createMany?: DirectoryFieldCreateManyDirectoryInputEnvelope
    set?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    disconnect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    delete?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    connect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    update?: DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput | DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput[]
    updateMany?: DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput | DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput[]
    deleteMany?: DirectoryFieldScalarWhereInput | DirectoryFieldScalarWhereInput[]
  }

  export type ElementsUpdateManyWithoutDirectoryNestedInput = {
    create?: XOR<ElementsCreateWithoutDirectoryInput, ElementsUncheckedCreateWithoutDirectoryInput> | ElementsCreateWithoutDirectoryInput[] | ElementsUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: ElementsCreateOrConnectWithoutDirectoryInput | ElementsCreateOrConnectWithoutDirectoryInput[]
    upsert?: ElementsUpsertWithWhereUniqueWithoutDirectoryInput | ElementsUpsertWithWhereUniqueWithoutDirectoryInput[]
    createMany?: ElementsCreateManyDirectoryInputEnvelope
    set?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
    disconnect?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
    delete?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
    connect?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
    update?: ElementsUpdateWithWhereUniqueWithoutDirectoryInput | ElementsUpdateWithWhereUniqueWithoutDirectoryInput[]
    updateMany?: ElementsUpdateManyWithWhereWithoutDirectoryInput | ElementsUpdateManyWithWhereWithoutDirectoryInput[]
    deleteMany?: ElementsScalarWhereInput | ElementsScalarWhereInput[]
  }

  export type LayerUpdateManyWithoutDirectoryNestedInput = {
    create?: XOR<LayerCreateWithoutDirectoryInput, LayerUncheckedCreateWithoutDirectoryInput> | LayerCreateWithoutDirectoryInput[] | LayerUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutDirectoryInput | LayerCreateOrConnectWithoutDirectoryInput[]
    upsert?: LayerUpsertWithWhereUniqueWithoutDirectoryInput | LayerUpsertWithWhereUniqueWithoutDirectoryInput[]
    createMany?: LayerCreateManyDirectoryInputEnvelope
    set?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    disconnect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    delete?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    update?: LayerUpdateWithWhereUniqueWithoutDirectoryInput | LayerUpdateWithWhereUniqueWithoutDirectoryInput[]
    updateMany?: LayerUpdateManyWithWhereWithoutDirectoryInput | LayerUpdateManyWithWhereWithoutDirectoryInput[]
    deleteMany?: LayerScalarWhereInput | LayerScalarWhereInput[]
  }

  export type DirectoryFieldUncheckedUpdateManyWithoutDirectoryNestedInput = {
    create?: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput> | DirectoryFieldCreateWithoutDirectoryInput[] | DirectoryFieldUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutDirectoryInput | DirectoryFieldCreateOrConnectWithoutDirectoryInput[]
    upsert?: DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput | DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput[]
    createMany?: DirectoryFieldCreateManyDirectoryInputEnvelope
    set?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    disconnect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    delete?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    connect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    update?: DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput | DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput[]
    updateMany?: DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput | DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput[]
    deleteMany?: DirectoryFieldScalarWhereInput | DirectoryFieldScalarWhereInput[]
  }

  export type ElementsUncheckedUpdateManyWithoutDirectoryNestedInput = {
    create?: XOR<ElementsCreateWithoutDirectoryInput, ElementsUncheckedCreateWithoutDirectoryInput> | ElementsCreateWithoutDirectoryInput[] | ElementsUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: ElementsCreateOrConnectWithoutDirectoryInput | ElementsCreateOrConnectWithoutDirectoryInput[]
    upsert?: ElementsUpsertWithWhereUniqueWithoutDirectoryInput | ElementsUpsertWithWhereUniqueWithoutDirectoryInput[]
    createMany?: ElementsCreateManyDirectoryInputEnvelope
    set?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
    disconnect?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
    delete?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
    connect?: ElementsWhereUniqueInput | ElementsWhereUniqueInput[]
    update?: ElementsUpdateWithWhereUniqueWithoutDirectoryInput | ElementsUpdateWithWhereUniqueWithoutDirectoryInput[]
    updateMany?: ElementsUpdateManyWithWhereWithoutDirectoryInput | ElementsUpdateManyWithWhereWithoutDirectoryInput[]
    deleteMany?: ElementsScalarWhereInput | ElementsScalarWhereInput[]
  }

  export type LayerUncheckedUpdateManyWithoutDirectoryNestedInput = {
    create?: XOR<LayerCreateWithoutDirectoryInput, LayerUncheckedCreateWithoutDirectoryInput> | LayerCreateWithoutDirectoryInput[] | LayerUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: LayerCreateOrConnectWithoutDirectoryInput | LayerCreateOrConnectWithoutDirectoryInput[]
    upsert?: LayerUpsertWithWhereUniqueWithoutDirectoryInput | LayerUpsertWithWhereUniqueWithoutDirectoryInput[]
    createMany?: LayerCreateManyDirectoryInputEnvelope
    set?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    disconnect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    delete?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    connect?: LayerWhereUniqueInput | LayerWhereUniqueInput[]
    update?: LayerUpdateWithWhereUniqueWithoutDirectoryInput | LayerUpdateWithWhereUniqueWithoutDirectoryInput[]
    updateMany?: LayerUpdateManyWithWhereWithoutDirectoryInput | LayerUpdateManyWithWhereWithoutDirectoryInput[]
    deleteMany?: LayerScalarWhereInput | LayerScalarWhereInput[]
  }

  export type DirectoryCreateNestedOneWithoutElementsInput = {
    create?: XOR<DirectoryCreateWithoutElementsInput, DirectoryUncheckedCreateWithoutElementsInput>
    connectOrCreate?: DirectoryCreateOrConnectWithoutElementsInput
    connect?: DirectoryWhereUniqueInput
  }

  export type DirectoryUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<DirectoryCreateWithoutElementsInput, DirectoryUncheckedCreateWithoutElementsInput>
    connectOrCreate?: DirectoryCreateOrConnectWithoutElementsInput
    upsert?: DirectoryUpsertWithoutElementsInput
    connect?: DirectoryWhereUniqueInput
    update?: XOR<XOR<DirectoryUpdateToOneWithWhereWithoutElementsInput, DirectoryUpdateWithoutElementsInput>, DirectoryUncheckedUpdateWithoutElementsInput>
  }

  export type DirectoryCreateNestedOneWithoutLayersInput = {
    create?: XOR<DirectoryCreateWithoutLayersInput, DirectoryUncheckedCreateWithoutLayersInput>
    connectOrCreate?: DirectoryCreateOrConnectWithoutLayersInput
    connect?: DirectoryWhereUniqueInput
  }

  export type DirectoryFieldCreateNestedOneWithoutLayersInput = {
    create?: XOR<DirectoryFieldCreateWithoutLayersInput, DirectoryFieldUncheckedCreateWithoutLayersInput>
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutLayersInput
    connect?: DirectoryFieldWhereUniqueInput
  }

  export type DirectoryUpdateOneRequiredWithoutLayersNestedInput = {
    create?: XOR<DirectoryCreateWithoutLayersInput, DirectoryUncheckedCreateWithoutLayersInput>
    connectOrCreate?: DirectoryCreateOrConnectWithoutLayersInput
    upsert?: DirectoryUpsertWithoutLayersInput
    connect?: DirectoryWhereUniqueInput
    update?: XOR<XOR<DirectoryUpdateToOneWithWhereWithoutLayersInput, DirectoryUpdateWithoutLayersInput>, DirectoryUncheckedUpdateWithoutLayersInput>
  }

  export type DirectoryFieldUpdateOneRequiredWithoutLayersNestedInput = {
    create?: XOR<DirectoryFieldCreateWithoutLayersInput, DirectoryFieldUncheckedCreateWithoutLayersInput>
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutLayersInput
    upsert?: DirectoryFieldUpsertWithoutLayersInput
    connect?: DirectoryFieldWhereUniqueInput
    update?: XOR<XOR<DirectoryFieldUpdateToOneWithWhereWithoutLayersInput, DirectoryFieldUpdateWithoutLayersInput>, DirectoryFieldUncheckedUpdateWithoutLayersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDirectoryFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DirectoryFieldType | EnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel> | $Enums.DirectoryFieldType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDirectoryFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DirectoryFieldType | EnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectoryFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.DirectoryFieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DirectoryFieldCreateWithoutConstraintInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
    directory: DirectoryCreateNestedOneWithoutFieldsInput
    layers?: LayerCreateNestedManyWithoutFieldInput
  }

  export type DirectoryFieldUncheckedCreateWithoutConstraintInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
    directory_id: string
    layers?: LayerUncheckedCreateNestedManyWithoutFieldInput
  }

  export type DirectoryFieldCreateOrConnectWithoutConstraintInput = {
    where: DirectoryFieldWhereUniqueInput
    create: XOR<DirectoryFieldCreateWithoutConstraintInput, DirectoryFieldUncheckedCreateWithoutConstraintInput>
  }

  export type IntegerFieldConstraintCreateWithoutConstraintInput = {
    id?: string
    min_value?: number | null
    max_value?: number | null
    default_value?: number | null
  }

  export type IntegerFieldConstraintUncheckedCreateWithoutConstraintInput = {
    id?: string
    min_value?: number | null
    max_value?: number | null
    default_value?: number | null
  }

  export type IntegerFieldConstraintCreateOrConnectWithoutConstraintInput = {
    where: IntegerFieldConstraintWhereUniqueInput
    create: XOR<IntegerFieldConstraintCreateWithoutConstraintInput, IntegerFieldConstraintUncheckedCreateWithoutConstraintInput>
  }

  export type StringFieldContraintCreateWithoutConstraintInput = {
    id?: string
    min_length?: number | null
    max_length?: number | null
    default_value?: string | null
  }

  export type StringFieldContraintUncheckedCreateWithoutConstraintInput = {
    id?: string
    min_length?: number | null
    max_length?: number | null
    default_value?: string | null
  }

  export type StringFieldContraintCreateOrConnectWithoutConstraintInput = {
    where: StringFieldContraintWhereUniqueInput
    create: XOR<StringFieldContraintCreateWithoutConstraintInput, StringFieldContraintUncheckedCreateWithoutConstraintInput>
  }

  export type DateFieldContraintCreateWithoutConstraintInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
  }

  export type DateFieldContraintUncheckedCreateWithoutConstraintInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
  }

  export type DateFieldContraintCreateOrConnectWithoutConstraintInput = {
    where: DateFieldContraintWhereUniqueInput
    create: XOR<DateFieldContraintCreateWithoutConstraintInput, DateFieldContraintUncheckedCreateWithoutConstraintInput>
  }

  export type DateTimeFieldContraintCreateWithoutConstraintInput = {
    id?: string
    min_value?: Date | string | null
    max_value?: Date | string | null
    default_value?: Date | string | null
  }

  export type DateTimeFieldContraintUncheckedCreateWithoutConstraintInput = {
    id?: string
    min_value?: Date | string | null
    max_value?: Date | string | null
    default_value?: Date | string | null
  }

  export type DateTimeFieldContraintCreateOrConnectWithoutConstraintInput = {
    where: DateTimeFieldContraintWhereUniqueInput
    create: XOR<DateTimeFieldContraintCreateWithoutConstraintInput, DateTimeFieldContraintUncheckedCreateWithoutConstraintInput>
  }

  export type TimeFieldContraintCreateWithoutConstraintInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
  }

  export type TimeFieldContraintUncheckedCreateWithoutConstraintInput = {
    id?: string
    min_value?: string | null
    max_value?: string | null
    default_value?: string | null
  }

  export type TimeFieldContraintCreateOrConnectWithoutConstraintInput = {
    where: TimeFieldContraintWhereUniqueInput
    create: XOR<TimeFieldContraintCreateWithoutConstraintInput, TimeFieldContraintUncheckedCreateWithoutConstraintInput>
  }

  export type PointFieldContraintCreateWithoutConstraintInput = {
    id?: string
  }

  export type PointFieldContraintUncheckedCreateWithoutConstraintInput = {
    id?: string
  }

  export type PointFieldContraintCreateOrConnectWithoutConstraintInput = {
    where: PointFieldContraintWhereUniqueInput
    create: XOR<PointFieldContraintCreateWithoutConstraintInput, PointFieldContraintUncheckedCreateWithoutConstraintInput>
  }

  export type LineStringFieldContraintCreateWithoutConstraintInput = {
    id?: string
  }

  export type LineStringFieldContraintUncheckedCreateWithoutConstraintInput = {
    id?: string
  }

  export type LineStringFieldContraintCreateOrConnectWithoutConstraintInput = {
    where: LineStringFieldContraintWhereUniqueInput
    create: XOR<LineStringFieldContraintCreateWithoutConstraintInput, LineStringFieldContraintUncheckedCreateWithoutConstraintInput>
  }

  export type PolygonFieldContraintCreateWithoutConstraintInput = {
    id?: string
  }

  export type PolygonFieldContraintUncheckedCreateWithoutConstraintInput = {
    id?: string
  }

  export type PolygonFieldContraintCreateOrConnectWithoutConstraintInput = {
    where: PolygonFieldContraintWhereUniqueInput
    create: XOR<PolygonFieldContraintCreateWithoutConstraintInput, PolygonFieldContraintUncheckedCreateWithoutConstraintInput>
  }

  export type DirectoryFieldUpsertWithoutConstraintInput = {
    update: XOR<DirectoryFieldUpdateWithoutConstraintInput, DirectoryFieldUncheckedUpdateWithoutConstraintInput>
    create: XOR<DirectoryFieldCreateWithoutConstraintInput, DirectoryFieldUncheckedCreateWithoutConstraintInput>
    where?: DirectoryFieldWhereInput
  }

  export type DirectoryFieldUpdateToOneWithWhereWithoutConstraintInput = {
    where?: DirectoryFieldWhereInput
    data: XOR<DirectoryFieldUpdateWithoutConstraintInput, DirectoryFieldUncheckedUpdateWithoutConstraintInput>
  }

  export type DirectoryFieldUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory?: DirectoryUpdateOneRequiredWithoutFieldsNestedInput
    layers?: LayerUpdateManyWithoutFieldNestedInput
  }

  export type DirectoryFieldUncheckedUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
    layers?: LayerUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type IntegerFieldConstraintUpsertWithoutConstraintInput = {
    update: XOR<IntegerFieldConstraintUpdateWithoutConstraintInput, IntegerFieldConstraintUncheckedUpdateWithoutConstraintInput>
    create: XOR<IntegerFieldConstraintCreateWithoutConstraintInput, IntegerFieldConstraintUncheckedCreateWithoutConstraintInput>
    where?: IntegerFieldConstraintWhereInput
  }

  export type IntegerFieldConstraintUpdateToOneWithWhereWithoutConstraintInput = {
    where?: IntegerFieldConstraintWhereInput
    data: XOR<IntegerFieldConstraintUpdateWithoutConstraintInput, IntegerFieldConstraintUncheckedUpdateWithoutConstraintInput>
  }

  export type IntegerFieldConstraintUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableIntFieldUpdateOperationsInput | number | null
    max_value?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntegerFieldConstraintUncheckedUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableIntFieldUpdateOperationsInput | number | null
    max_value?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFieldContraintUpsertWithoutConstraintInput = {
    update: XOR<StringFieldContraintUpdateWithoutConstraintInput, StringFieldContraintUncheckedUpdateWithoutConstraintInput>
    create: XOR<StringFieldContraintCreateWithoutConstraintInput, StringFieldContraintUncheckedCreateWithoutConstraintInput>
    where?: StringFieldContraintWhereInput
  }

  export type StringFieldContraintUpdateToOneWithWhereWithoutConstraintInput = {
    where?: StringFieldContraintWhereInput
    data: XOR<StringFieldContraintUpdateWithoutConstraintInput, StringFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type StringFieldContraintUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_length?: NullableIntFieldUpdateOperationsInput | number | null
    max_length?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFieldContraintUncheckedUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_length?: NullableIntFieldUpdateOperationsInput | number | null
    max_length?: NullableIntFieldUpdateOperationsInput | number | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateFieldContraintUpsertWithoutConstraintInput = {
    update: XOR<DateFieldContraintUpdateWithoutConstraintInput, DateFieldContraintUncheckedUpdateWithoutConstraintInput>
    create: XOR<DateFieldContraintCreateWithoutConstraintInput, DateFieldContraintUncheckedCreateWithoutConstraintInput>
    where?: DateFieldContraintWhereInput
  }

  export type DateFieldContraintUpdateToOneWithWhereWithoutConstraintInput = {
    where?: DateFieldContraintWhereInput
    data: XOR<DateFieldContraintUpdateWithoutConstraintInput, DateFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type DateFieldContraintUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateFieldContraintUncheckedUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateTimeFieldContraintUpsertWithoutConstraintInput = {
    update: XOR<DateTimeFieldContraintUpdateWithoutConstraintInput, DateTimeFieldContraintUncheckedUpdateWithoutConstraintInput>
    create: XOR<DateTimeFieldContraintCreateWithoutConstraintInput, DateTimeFieldContraintUncheckedCreateWithoutConstraintInput>
    where?: DateTimeFieldContraintWhereInput
  }

  export type DateTimeFieldContraintUpdateToOneWithWhereWithoutConstraintInput = {
    where?: DateTimeFieldContraintWhereInput
    data: XOR<DateTimeFieldContraintUpdateWithoutConstraintInput, DateTimeFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type DateTimeFieldContraintUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DateTimeFieldContraintUncheckedUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_value?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimeFieldContraintUpsertWithoutConstraintInput = {
    update: XOR<TimeFieldContraintUpdateWithoutConstraintInput, TimeFieldContraintUncheckedUpdateWithoutConstraintInput>
    create: XOR<TimeFieldContraintCreateWithoutConstraintInput, TimeFieldContraintUncheckedCreateWithoutConstraintInput>
    where?: TimeFieldContraintWhereInput
  }

  export type TimeFieldContraintUpdateToOneWithWhereWithoutConstraintInput = {
    where?: TimeFieldContraintWhereInput
    data: XOR<TimeFieldContraintUpdateWithoutConstraintInput, TimeFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type TimeFieldContraintUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimeFieldContraintUncheckedUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_value?: NullableStringFieldUpdateOperationsInput | string | null
    max_value?: NullableStringFieldUpdateOperationsInput | string | null
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PointFieldContraintUpsertWithoutConstraintInput = {
    update: XOR<PointFieldContraintUpdateWithoutConstraintInput, PointFieldContraintUncheckedUpdateWithoutConstraintInput>
    create: XOR<PointFieldContraintCreateWithoutConstraintInput, PointFieldContraintUncheckedCreateWithoutConstraintInput>
    where?: PointFieldContraintWhereInput
  }

  export type PointFieldContraintUpdateToOneWithWhereWithoutConstraintInput = {
    where?: PointFieldContraintWhereInput
    data: XOR<PointFieldContraintUpdateWithoutConstraintInput, PointFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type PointFieldContraintUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PointFieldContraintUncheckedUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LineStringFieldContraintUpsertWithoutConstraintInput = {
    update: XOR<LineStringFieldContraintUpdateWithoutConstraintInput, LineStringFieldContraintUncheckedUpdateWithoutConstraintInput>
    create: XOR<LineStringFieldContraintCreateWithoutConstraintInput, LineStringFieldContraintUncheckedCreateWithoutConstraintInput>
    where?: LineStringFieldContraintWhereInput
  }

  export type LineStringFieldContraintUpdateToOneWithWhereWithoutConstraintInput = {
    where?: LineStringFieldContraintWhereInput
    data: XOR<LineStringFieldContraintUpdateWithoutConstraintInput, LineStringFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type LineStringFieldContraintUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LineStringFieldContraintUncheckedUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PolygonFieldContraintUpsertWithoutConstraintInput = {
    update: XOR<PolygonFieldContraintUpdateWithoutConstraintInput, PolygonFieldContraintUncheckedUpdateWithoutConstraintInput>
    create: XOR<PolygonFieldContraintCreateWithoutConstraintInput, PolygonFieldContraintUncheckedCreateWithoutConstraintInput>
    where?: PolygonFieldContraintWhereInput
  }

  export type PolygonFieldContraintUpdateToOneWithWhereWithoutConstraintInput = {
    where?: PolygonFieldContraintWhereInput
    data: XOR<PolygonFieldContraintUpdateWithoutConstraintInput, PolygonFieldContraintUncheckedUpdateWithoutConstraintInput>
  }

  export type PolygonFieldContraintUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PolygonFieldContraintUncheckedUpdateWithoutConstraintInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type DirectoryFieldConstraintCreateWithoutInteger_constraintInput = {
    id?: string
    field: DirectoryFieldCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateWithoutInteger_constraintInput = {
    id?: string
    field_id: string
    string_constraint?: StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintCreateOrConnectWithoutInteger_constraintInput = {
    where: DirectoryFieldConstraintWhereUniqueInput
    create: XOR<DirectoryFieldConstraintCreateWithoutInteger_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutInteger_constraintInput>
  }

  export type DirectoryFieldConstraintUpsertWithoutInteger_constraintInput = {
    update: XOR<DirectoryFieldConstraintUpdateWithoutInteger_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutInteger_constraintInput>
    create: XOR<DirectoryFieldConstraintCreateWithoutInteger_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutInteger_constraintInput>
    where?: DirectoryFieldConstraintWhereInput
  }

  export type DirectoryFieldConstraintUpdateToOneWithWhereWithoutInteger_constraintInput = {
    where?: DirectoryFieldConstraintWhereInput
    data: XOR<DirectoryFieldConstraintUpdateWithoutInteger_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutInteger_constraintInput>
  }

  export type DirectoryFieldConstraintUpdateWithoutInteger_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateWithoutInteger_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
    string_constraint?: StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintCreateWithoutString_constraintInput = {
    id?: string
    field: DirectoryFieldCreateNestedOneWithoutConstraintInput
    integer_constraint?: IntegerFieldConstraintCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateWithoutString_constraintInput = {
    id?: string
    field_id: string
    integer_constraint?: IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintCreateOrConnectWithoutString_constraintInput = {
    where: DirectoryFieldConstraintWhereUniqueInput
    create: XOR<DirectoryFieldConstraintCreateWithoutString_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutString_constraintInput>
  }

  export type DirectoryFieldConstraintUpsertWithoutString_constraintInput = {
    update: XOR<DirectoryFieldConstraintUpdateWithoutString_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutString_constraintInput>
    create: XOR<DirectoryFieldConstraintCreateWithoutString_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutString_constraintInput>
    where?: DirectoryFieldConstraintWhereInput
  }

  export type DirectoryFieldConstraintUpdateToOneWithWhereWithoutString_constraintInput = {
    where?: DirectoryFieldConstraintWhereInput
    data: XOR<DirectoryFieldConstraintUpdateWithoutString_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutString_constraintInput>
  }

  export type DirectoryFieldConstraintUpdateWithoutString_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput
    integer_constraint?: IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateWithoutString_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintCreateWithoutDate_constraintInput = {
    id?: string
    field: DirectoryFieldCreateNestedOneWithoutConstraintInput
    integer_constraint?: IntegerFieldConstraintCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateWithoutDate_constraintInput = {
    id?: string
    field_id: string
    integer_constraint?: IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintCreateOrConnectWithoutDate_constraintInput = {
    where: DirectoryFieldConstraintWhereUniqueInput
    create: XOR<DirectoryFieldConstraintCreateWithoutDate_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutDate_constraintInput>
  }

  export type DirectoryFieldConstraintUpsertWithoutDate_constraintInput = {
    update: XOR<DirectoryFieldConstraintUpdateWithoutDate_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutDate_constraintInput>
    create: XOR<DirectoryFieldConstraintCreateWithoutDate_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutDate_constraintInput>
    where?: DirectoryFieldConstraintWhereInput
  }

  export type DirectoryFieldConstraintUpdateToOneWithWhereWithoutDate_constraintInput = {
    where?: DirectoryFieldConstraintWhereInput
    data: XOR<DirectoryFieldConstraintUpdateWithoutDate_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutDate_constraintInput>
  }

  export type DirectoryFieldConstraintUpdateWithoutDate_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput
    integer_constraint?: IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateWithoutDate_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintCreateWithoutDatetime_constraintInput = {
    id?: string
    field: DirectoryFieldCreateNestedOneWithoutConstraintInput
    integer_constraint?: IntegerFieldConstraintCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateWithoutDatetime_constraintInput = {
    id?: string
    field_id: string
    integer_constraint?: IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintCreateOrConnectWithoutDatetime_constraintInput = {
    where: DirectoryFieldConstraintWhereUniqueInput
    create: XOR<DirectoryFieldConstraintCreateWithoutDatetime_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutDatetime_constraintInput>
  }

  export type DirectoryFieldConstraintUpsertWithoutDatetime_constraintInput = {
    update: XOR<DirectoryFieldConstraintUpdateWithoutDatetime_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutDatetime_constraintInput>
    create: XOR<DirectoryFieldConstraintCreateWithoutDatetime_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutDatetime_constraintInput>
    where?: DirectoryFieldConstraintWhereInput
  }

  export type DirectoryFieldConstraintUpdateToOneWithWhereWithoutDatetime_constraintInput = {
    where?: DirectoryFieldConstraintWhereInput
    data: XOR<DirectoryFieldConstraintUpdateWithoutDatetime_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutDatetime_constraintInput>
  }

  export type DirectoryFieldConstraintUpdateWithoutDatetime_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput
    integer_constraint?: IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateWithoutDatetime_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintCreateWithoutTime_constraintInput = {
    id?: string
    field: DirectoryFieldCreateNestedOneWithoutConstraintInput
    integer_constraint?: IntegerFieldConstraintCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateWithoutTime_constraintInput = {
    id?: string
    field_id: string
    integer_constraint?: IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintCreateOrConnectWithoutTime_constraintInput = {
    where: DirectoryFieldConstraintWhereUniqueInput
    create: XOR<DirectoryFieldConstraintCreateWithoutTime_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutTime_constraintInput>
  }

  export type DirectoryFieldConstraintUpsertWithoutTime_constraintInput = {
    update: XOR<DirectoryFieldConstraintUpdateWithoutTime_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutTime_constraintInput>
    create: XOR<DirectoryFieldConstraintCreateWithoutTime_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutTime_constraintInput>
    where?: DirectoryFieldConstraintWhereInput
  }

  export type DirectoryFieldConstraintUpdateToOneWithWhereWithoutTime_constraintInput = {
    where?: DirectoryFieldConstraintWhereInput
    data: XOR<DirectoryFieldConstraintUpdateWithoutTime_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutTime_constraintInput>
  }

  export type DirectoryFieldConstraintUpdateWithoutTime_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput
    integer_constraint?: IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateWithoutTime_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintCreateWithoutPoint_constraintInput = {
    id?: string
    field: DirectoryFieldCreateNestedOneWithoutConstraintInput
    integer_constraint?: IntegerFieldConstraintCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateWithoutPoint_constraintInput = {
    id?: string
    field_id: string
    integer_constraint?: IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintCreateOrConnectWithoutPoint_constraintInput = {
    where: DirectoryFieldConstraintWhereUniqueInput
    create: XOR<DirectoryFieldConstraintCreateWithoutPoint_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutPoint_constraintInput>
  }

  export type DirectoryFieldConstraintUpsertWithoutPoint_constraintInput = {
    update: XOR<DirectoryFieldConstraintUpdateWithoutPoint_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutPoint_constraintInput>
    create: XOR<DirectoryFieldConstraintCreateWithoutPoint_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutPoint_constraintInput>
    where?: DirectoryFieldConstraintWhereInput
  }

  export type DirectoryFieldConstraintUpdateToOneWithWhereWithoutPoint_constraintInput = {
    where?: DirectoryFieldConstraintWhereInput
    data: XOR<DirectoryFieldConstraintUpdateWithoutPoint_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutPoint_constraintInput>
  }

  export type DirectoryFieldConstraintUpdateWithoutPoint_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput
    integer_constraint?: IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateWithoutPoint_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintCreateWithoutLinestring_constraintInput = {
    id?: string
    field: DirectoryFieldCreateNestedOneWithoutConstraintInput
    integer_constraint?: IntegerFieldConstraintCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateWithoutLinestring_constraintInput = {
    id?: string
    field_id: string
    integer_constraint?: IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintCreateOrConnectWithoutLinestring_constraintInput = {
    where: DirectoryFieldConstraintWhereUniqueInput
    create: XOR<DirectoryFieldConstraintCreateWithoutLinestring_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutLinestring_constraintInput>
  }

  export type DirectoryFieldConstraintUpsertWithoutLinestring_constraintInput = {
    update: XOR<DirectoryFieldConstraintUpdateWithoutLinestring_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutLinestring_constraintInput>
    create: XOR<DirectoryFieldConstraintCreateWithoutLinestring_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutLinestring_constraintInput>
    where?: DirectoryFieldConstraintWhereInput
  }

  export type DirectoryFieldConstraintUpdateToOneWithWhereWithoutLinestring_constraintInput = {
    where?: DirectoryFieldConstraintWhereInput
    data: XOR<DirectoryFieldConstraintUpdateWithoutLinestring_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutLinestring_constraintInput>
  }

  export type DirectoryFieldConstraintUpdateWithoutLinestring_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput
    integer_constraint?: IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateWithoutLinestring_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintCreateWithoutPolygon_constraintInput = {
    id?: string
    field: DirectoryFieldCreateNestedOneWithoutConstraintInput
    integer_constraint?: IntegerFieldConstraintCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateWithoutPolygon_constraintInput = {
    id?: string
    field_id: string
    integer_constraint?: IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintCreateOrConnectWithoutPolygon_constraintInput = {
    where: DirectoryFieldConstraintWhereUniqueInput
    create: XOR<DirectoryFieldConstraintCreateWithoutPolygon_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutPolygon_constraintInput>
  }

  export type DirectoryFieldConstraintUpsertWithoutPolygon_constraintInput = {
    update: XOR<DirectoryFieldConstraintUpdateWithoutPolygon_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutPolygon_constraintInput>
    create: XOR<DirectoryFieldConstraintCreateWithoutPolygon_constraintInput, DirectoryFieldConstraintUncheckedCreateWithoutPolygon_constraintInput>
    where?: DirectoryFieldConstraintWhereInput
  }

  export type DirectoryFieldConstraintUpdateToOneWithWhereWithoutPolygon_constraintInput = {
    where?: DirectoryFieldConstraintWhereInput
    data: XOR<DirectoryFieldConstraintUpdateWithoutPolygon_constraintInput, DirectoryFieldConstraintUncheckedUpdateWithoutPolygon_constraintInput>
  }

  export type DirectoryFieldConstraintUpdateWithoutPolygon_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: DirectoryFieldUpdateOneRequiredWithoutConstraintNestedInput
    integer_constraint?: IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateWithoutPolygon_constraintInput = {
    id?: StringFieldUpdateOperationsInput | string
    field_id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryCreateWithoutFieldsInput = {
    id?: string
    name: string
    description?: string | null
    elements?: ElementsCreateNestedManyWithoutDirectoryInput
    layers?: LayerCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryUncheckedCreateWithoutFieldsInput = {
    id?: string
    name: string
    description?: string | null
    elements?: ElementsUncheckedCreateNestedManyWithoutDirectoryInput
    layers?: LayerUncheckedCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryCreateOrConnectWithoutFieldsInput = {
    where: DirectoryWhereUniqueInput
    create: XOR<DirectoryCreateWithoutFieldsInput, DirectoryUncheckedCreateWithoutFieldsInput>
  }

  export type DirectoryFieldConstraintCreateWithoutFieldInput = {
    id?: string
    integer_constraint?: IntegerFieldConstraintCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintUncheckedCreateWithoutFieldInput = {
    id?: string
    integer_constraint?: IntegerFieldConstraintUncheckedCreateNestedOneWithoutConstraintInput
    string_constraint?: StringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    date_constraint?: DateFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    datetime_constraint?: DateTimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    time_constraint?: TimeFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    point_constraint?: PointFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    linestring_constraint?: LineStringFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
    polygon_constraint?: PolygonFieldContraintUncheckedCreateNestedOneWithoutConstraintInput
  }

  export type DirectoryFieldConstraintCreateOrConnectWithoutFieldInput = {
    where: DirectoryFieldConstraintWhereUniqueInput
    create: XOR<DirectoryFieldConstraintCreateWithoutFieldInput, DirectoryFieldConstraintUncheckedCreateWithoutFieldInput>
  }

  export type LayerCreateWithoutFieldInput = {
    id?: string
    name: string
    active?: boolean
    directory: DirectoryCreateNestedOneWithoutLayersInput
  }

  export type LayerUncheckedCreateWithoutFieldInput = {
    id?: string
    name: string
    active?: boolean
    directory_id: string
  }

  export type LayerCreateOrConnectWithoutFieldInput = {
    where: LayerWhereUniqueInput
    create: XOR<LayerCreateWithoutFieldInput, LayerUncheckedCreateWithoutFieldInput>
  }

  export type LayerCreateManyFieldInputEnvelope = {
    data: LayerCreateManyFieldInput | LayerCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type DirectoryUpsertWithoutFieldsInput = {
    update: XOR<DirectoryUpdateWithoutFieldsInput, DirectoryUncheckedUpdateWithoutFieldsInput>
    create: XOR<DirectoryCreateWithoutFieldsInput, DirectoryUncheckedCreateWithoutFieldsInput>
    where?: DirectoryWhereInput
  }

  export type DirectoryUpdateToOneWithWhereWithoutFieldsInput = {
    where?: DirectoryWhereInput
    data: XOR<DirectoryUpdateWithoutFieldsInput, DirectoryUncheckedUpdateWithoutFieldsInput>
  }

  export type DirectoryUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    elements?: ElementsUpdateManyWithoutDirectoryNestedInput
    layers?: LayerUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    elements?: ElementsUncheckedUpdateManyWithoutDirectoryNestedInput
    layers?: LayerUncheckedUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryFieldConstraintUpsertWithoutFieldInput = {
    update: XOR<DirectoryFieldConstraintUpdateWithoutFieldInput, DirectoryFieldConstraintUncheckedUpdateWithoutFieldInput>
    create: XOR<DirectoryFieldConstraintCreateWithoutFieldInput, DirectoryFieldConstraintUncheckedCreateWithoutFieldInput>
    where?: DirectoryFieldConstraintWhereInput
  }

  export type DirectoryFieldConstraintUpdateToOneWithWhereWithoutFieldInput = {
    where?: DirectoryFieldConstraintWhereInput
    data: XOR<DirectoryFieldConstraintUpdateWithoutFieldInput, DirectoryFieldConstraintUncheckedUpdateWithoutFieldInput>
  }

  export type DirectoryFieldConstraintUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUpdateOneWithoutConstraintNestedInput
  }

  export type DirectoryFieldConstraintUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    integer_constraint?: IntegerFieldConstraintUncheckedUpdateOneWithoutConstraintNestedInput
    string_constraint?: StringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    date_constraint?: DateFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    datetime_constraint?: DateTimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    time_constraint?: TimeFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    point_constraint?: PointFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    linestring_constraint?: LineStringFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
    polygon_constraint?: PolygonFieldContraintUncheckedUpdateOneWithoutConstraintNestedInput
  }

  export type LayerUpsertWithWhereUniqueWithoutFieldInput = {
    where: LayerWhereUniqueInput
    update: XOR<LayerUpdateWithoutFieldInput, LayerUncheckedUpdateWithoutFieldInput>
    create: XOR<LayerCreateWithoutFieldInput, LayerUncheckedCreateWithoutFieldInput>
  }

  export type LayerUpdateWithWhereUniqueWithoutFieldInput = {
    where: LayerWhereUniqueInput
    data: XOR<LayerUpdateWithoutFieldInput, LayerUncheckedUpdateWithoutFieldInput>
  }

  export type LayerUpdateManyWithWhereWithoutFieldInput = {
    where: LayerScalarWhereInput
    data: XOR<LayerUpdateManyMutationInput, LayerUncheckedUpdateManyWithoutFieldInput>
  }

  export type LayerScalarWhereInput = {
    AND?: LayerScalarWhereInput | LayerScalarWhereInput[]
    OR?: LayerScalarWhereInput[]
    NOT?: LayerScalarWhereInput | LayerScalarWhereInput[]
    id?: StringFilter<"Layer"> | string
    name?: StringFilter<"Layer"> | string
    active?: BoolFilter<"Layer"> | boolean
    directory_id?: StringFilter<"Layer"> | string
    field_id?: StringFilter<"Layer"> | string
  }

  export type DirectoryFieldCreateWithoutDirectoryInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
    constraint?: DirectoryFieldConstraintCreateNestedOneWithoutFieldInput
    layers?: LayerCreateNestedManyWithoutFieldInput
  }

  export type DirectoryFieldUncheckedCreateWithoutDirectoryInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
    constraint?: DirectoryFieldConstraintUncheckedCreateNestedOneWithoutFieldInput
    layers?: LayerUncheckedCreateNestedManyWithoutFieldInput
  }

  export type DirectoryFieldCreateOrConnectWithoutDirectoryInput = {
    where: DirectoryFieldWhereUniqueInput
    create: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput>
  }

  export type DirectoryFieldCreateManyDirectoryInputEnvelope = {
    data: DirectoryFieldCreateManyDirectoryInput | DirectoryFieldCreateManyDirectoryInput[]
    skipDuplicates?: boolean
  }

  export type ElementsCreateWithoutDirectoryInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    is_valid?: boolean
  }

  export type ElementsUncheckedCreateWithoutDirectoryInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    is_valid?: boolean
  }

  export type ElementsCreateOrConnectWithoutDirectoryInput = {
    where: ElementsWhereUniqueInput
    create: XOR<ElementsCreateWithoutDirectoryInput, ElementsUncheckedCreateWithoutDirectoryInput>
  }

  export type ElementsCreateManyDirectoryInputEnvelope = {
    data: ElementsCreateManyDirectoryInput | ElementsCreateManyDirectoryInput[]
    skipDuplicates?: boolean
  }

  export type LayerCreateWithoutDirectoryInput = {
    id?: string
    name: string
    active?: boolean
    field: DirectoryFieldCreateNestedOneWithoutLayersInput
  }

  export type LayerUncheckedCreateWithoutDirectoryInput = {
    id?: string
    name: string
    active?: boolean
    field_id: string
  }

  export type LayerCreateOrConnectWithoutDirectoryInput = {
    where: LayerWhereUniqueInput
    create: XOR<LayerCreateWithoutDirectoryInput, LayerUncheckedCreateWithoutDirectoryInput>
  }

  export type LayerCreateManyDirectoryInputEnvelope = {
    data: LayerCreateManyDirectoryInput | LayerCreateManyDirectoryInput[]
    skipDuplicates?: boolean
  }

  export type DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput = {
    where: DirectoryFieldWhereUniqueInput
    update: XOR<DirectoryFieldUpdateWithoutDirectoryInput, DirectoryFieldUncheckedUpdateWithoutDirectoryInput>
    create: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput>
  }

  export type DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput = {
    where: DirectoryFieldWhereUniqueInput
    data: XOR<DirectoryFieldUpdateWithoutDirectoryInput, DirectoryFieldUncheckedUpdateWithoutDirectoryInput>
  }

  export type DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput = {
    where: DirectoryFieldScalarWhereInput
    data: XOR<DirectoryFieldUpdateManyMutationInput, DirectoryFieldUncheckedUpdateManyWithoutDirectoryInput>
  }

  export type DirectoryFieldScalarWhereInput = {
    AND?: DirectoryFieldScalarWhereInput | DirectoryFieldScalarWhereInput[]
    OR?: DirectoryFieldScalarWhereInput[]
    NOT?: DirectoryFieldScalarWhereInput | DirectoryFieldScalarWhereInput[]
    id?: StringFilter<"DirectoryField"> | string
    name?: StringFilter<"DirectoryField"> | string
    code?: StringFilter<"DirectoryField"> | string
    type?: EnumDirectoryFieldTypeFilter<"DirectoryField"> | $Enums.DirectoryFieldType
    required?: BoolFilter<"DirectoryField"> | boolean
    order?: IntFilter<"DirectoryField"> | number
    show_in_list?: BoolFilter<"DirectoryField"> | boolean
    directory_id?: StringFilter<"DirectoryField"> | string
  }

  export type ElementsUpsertWithWhereUniqueWithoutDirectoryInput = {
    where: ElementsWhereUniqueInput
    update: XOR<ElementsUpdateWithoutDirectoryInput, ElementsUncheckedUpdateWithoutDirectoryInput>
    create: XOR<ElementsCreateWithoutDirectoryInput, ElementsUncheckedCreateWithoutDirectoryInput>
  }

  export type ElementsUpdateWithWhereUniqueWithoutDirectoryInput = {
    where: ElementsWhereUniqueInput
    data: XOR<ElementsUpdateWithoutDirectoryInput, ElementsUncheckedUpdateWithoutDirectoryInput>
  }

  export type ElementsUpdateManyWithWhereWithoutDirectoryInput = {
    where: ElementsScalarWhereInput
    data: XOR<ElementsUpdateManyMutationInput, ElementsUncheckedUpdateManyWithoutDirectoryInput>
  }

  export type ElementsScalarWhereInput = {
    AND?: ElementsScalarWhereInput | ElementsScalarWhereInput[]
    OR?: ElementsScalarWhereInput[]
    NOT?: ElementsScalarWhereInput | ElementsScalarWhereInput[]
    id?: StringFilter<"Elements"> | string
    data?: JsonFilter<"Elements">
    is_valid?: BoolFilter<"Elements"> | boolean
    directory_id?: StringFilter<"Elements"> | string
  }

  export type LayerUpsertWithWhereUniqueWithoutDirectoryInput = {
    where: LayerWhereUniqueInput
    update: XOR<LayerUpdateWithoutDirectoryInput, LayerUncheckedUpdateWithoutDirectoryInput>
    create: XOR<LayerCreateWithoutDirectoryInput, LayerUncheckedCreateWithoutDirectoryInput>
  }

  export type LayerUpdateWithWhereUniqueWithoutDirectoryInput = {
    where: LayerWhereUniqueInput
    data: XOR<LayerUpdateWithoutDirectoryInput, LayerUncheckedUpdateWithoutDirectoryInput>
  }

  export type LayerUpdateManyWithWhereWithoutDirectoryInput = {
    where: LayerScalarWhereInput
    data: XOR<LayerUpdateManyMutationInput, LayerUncheckedUpdateManyWithoutDirectoryInput>
  }

  export type DirectoryCreateWithoutElementsInput = {
    id?: string
    name: string
    description?: string | null
    fields?: DirectoryFieldCreateNestedManyWithoutDirectoryInput
    layers?: LayerCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryUncheckedCreateWithoutElementsInput = {
    id?: string
    name: string
    description?: string | null
    fields?: DirectoryFieldUncheckedCreateNestedManyWithoutDirectoryInput
    layers?: LayerUncheckedCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryCreateOrConnectWithoutElementsInput = {
    where: DirectoryWhereUniqueInput
    create: XOR<DirectoryCreateWithoutElementsInput, DirectoryUncheckedCreateWithoutElementsInput>
  }

  export type DirectoryUpsertWithoutElementsInput = {
    update: XOR<DirectoryUpdateWithoutElementsInput, DirectoryUncheckedUpdateWithoutElementsInput>
    create: XOR<DirectoryCreateWithoutElementsInput, DirectoryUncheckedCreateWithoutElementsInput>
    where?: DirectoryWhereInput
  }

  export type DirectoryUpdateToOneWithWhereWithoutElementsInput = {
    where?: DirectoryWhereInput
    data: XOR<DirectoryUpdateWithoutElementsInput, DirectoryUncheckedUpdateWithoutElementsInput>
  }

  export type DirectoryUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: DirectoryFieldUpdateManyWithoutDirectoryNestedInput
    layers?: LayerUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryUncheckedUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: DirectoryFieldUncheckedUpdateManyWithoutDirectoryNestedInput
    layers?: LayerUncheckedUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryCreateWithoutLayersInput = {
    id?: string
    name: string
    description?: string | null
    fields?: DirectoryFieldCreateNestedManyWithoutDirectoryInput
    elements?: ElementsCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryUncheckedCreateWithoutLayersInput = {
    id?: string
    name: string
    description?: string | null
    fields?: DirectoryFieldUncheckedCreateNestedManyWithoutDirectoryInput
    elements?: ElementsUncheckedCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryCreateOrConnectWithoutLayersInput = {
    where: DirectoryWhereUniqueInput
    create: XOR<DirectoryCreateWithoutLayersInput, DirectoryUncheckedCreateWithoutLayersInput>
  }

  export type DirectoryFieldCreateWithoutLayersInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
    directory: DirectoryCreateNestedOneWithoutFieldsInput
    constraint?: DirectoryFieldConstraintCreateNestedOneWithoutFieldInput
  }

  export type DirectoryFieldUncheckedCreateWithoutLayersInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
    directory_id: string
    constraint?: DirectoryFieldConstraintUncheckedCreateNestedOneWithoutFieldInput
  }

  export type DirectoryFieldCreateOrConnectWithoutLayersInput = {
    where: DirectoryFieldWhereUniqueInput
    create: XOR<DirectoryFieldCreateWithoutLayersInput, DirectoryFieldUncheckedCreateWithoutLayersInput>
  }

  export type DirectoryUpsertWithoutLayersInput = {
    update: XOR<DirectoryUpdateWithoutLayersInput, DirectoryUncheckedUpdateWithoutLayersInput>
    create: XOR<DirectoryCreateWithoutLayersInput, DirectoryUncheckedCreateWithoutLayersInput>
    where?: DirectoryWhereInput
  }

  export type DirectoryUpdateToOneWithWhereWithoutLayersInput = {
    where?: DirectoryWhereInput
    data: XOR<DirectoryUpdateWithoutLayersInput, DirectoryUncheckedUpdateWithoutLayersInput>
  }

  export type DirectoryUpdateWithoutLayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: DirectoryFieldUpdateManyWithoutDirectoryNestedInput
    elements?: ElementsUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryUncheckedUpdateWithoutLayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: DirectoryFieldUncheckedUpdateManyWithoutDirectoryNestedInput
    elements?: ElementsUncheckedUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryFieldUpsertWithoutLayersInput = {
    update: XOR<DirectoryFieldUpdateWithoutLayersInput, DirectoryFieldUncheckedUpdateWithoutLayersInput>
    create: XOR<DirectoryFieldCreateWithoutLayersInput, DirectoryFieldUncheckedCreateWithoutLayersInput>
    where?: DirectoryFieldWhereInput
  }

  export type DirectoryFieldUpdateToOneWithWhereWithoutLayersInput = {
    where?: DirectoryFieldWhereInput
    data: XOR<DirectoryFieldUpdateWithoutLayersInput, DirectoryFieldUncheckedUpdateWithoutLayersInput>
  }

  export type DirectoryFieldUpdateWithoutLayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory?: DirectoryUpdateOneRequiredWithoutFieldsNestedInput
    constraint?: DirectoryFieldConstraintUpdateOneWithoutFieldNestedInput
  }

  export type DirectoryFieldUncheckedUpdateWithoutLayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
    constraint?: DirectoryFieldConstraintUncheckedUpdateOneWithoutFieldNestedInput
  }

  export type LayerCreateManyFieldInput = {
    id?: string
    name: string
    active?: boolean
    directory_id: string
  }

  export type LayerUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    directory?: DirectoryUpdateOneRequiredWithoutLayersNestedInput
  }

  export type LayerUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
  }

  export type LayerUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
  }

  export type DirectoryFieldCreateManyDirectoryInput = {
    id?: string
    name: string
    code: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    order: number
    show_in_list?: boolean
  }

  export type ElementsCreateManyDirectoryInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    is_valid?: boolean
  }

  export type LayerCreateManyDirectoryInput = {
    id?: string
    name: string
    active?: boolean
    field_id: string
  }

  export type DirectoryFieldUpdateWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    constraint?: DirectoryFieldConstraintUpdateOneWithoutFieldNestedInput
    layers?: LayerUpdateManyWithoutFieldNestedInput
  }

  export type DirectoryFieldUncheckedUpdateWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    constraint?: DirectoryFieldConstraintUncheckedUpdateOneWithoutFieldNestedInput
    layers?: LayerUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type DirectoryFieldUncheckedUpdateManyWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ElementsUpdateWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    is_valid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ElementsUncheckedUpdateWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    is_valid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ElementsUncheckedUpdateManyWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    is_valid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LayerUpdateWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    field?: DirectoryFieldUpdateOneRequiredWithoutLayersNestedInput
  }

  export type LayerUncheckedUpdateWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    field_id?: StringFieldUpdateOperationsInput | string
  }

  export type LayerUncheckedUpdateManyWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    field_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}