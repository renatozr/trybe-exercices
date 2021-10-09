const dogApi = require('../src/dogApi');

describe('testando a requisição', () => {
  const mockDogApi = jest.spyOn(dogApi, 'getDogPictures');
  afterEach(mockDogApi.mockReset);

  test('teste caso requisição sucedida', () => {
    mockDogApi.mockResolvedValue({ status: 'success' });

    mockDogApi();
    expect(mockDogApi).toHaveBeenCalled();
    expect(mockDogApi).toHaveBeenCalledTimes(1);
    expect(mockDogApi()).resolves.toBe({ status: 'success' });
    expect(mockDogApi).toHaveBeenCalledTimes(2);
  });
  
  test('teste caso requisição fracassada', () => {
    mockDogApi.mockRejectedValue({ status: 'failure' });

    expect(mockDogApi).toHaveBeenCalledTimes(0);
    expect(mockDogApi()).rejects.toMatch({ status: 'failure' });
    expect(mockDogApi).toHaveBeenCalledTimes(1);
  });
});