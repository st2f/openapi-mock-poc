# DefaultApi

All URIs are relative to *http://localhost:4010*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getProperties**](DefaultApi.md#getproperties) | **GET** /properties | Retrieve all properties |
| [**getPropertyById**](DefaultApi.md#getpropertybyid) | **GET** /properties/{id} | Retrieve a property by ID |



## getProperties

> Array&lt;Property&gt; getProperties()

Retrieve all properties

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetPropertiesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getProperties();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Property&gt;**](Property.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of properties |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPropertyById

> Property getPropertyById(id)

Retrieve a property by ID

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetPropertyByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    id: id_example,
  } satisfies GetPropertyByIdRequest;

  try {
    const data = await api.getPropertyById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Property**](Property.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Property details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

