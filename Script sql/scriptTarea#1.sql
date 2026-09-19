USE AdventureWorks2025;
GO

-- =============================================
-- 1. INSERTAR
-- =============================================
CREATE OR ALTER PROCEDURE Person.InsertAddressType
    @Name NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Person.AddressType (Name)
    VALUES (@Name);
END;
GO


-- =============================================
-- 2. ACTUALIZAR
-- =============================================
CREATE OR ALTER PROCEDURE Person.UpdateAddressType
    @AddressTypeID INT,
    @Name NVARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Person.AddressType
    SET Name = @Name
    WHERE AddressTypeID = @AddressTypeID;
END;
GO


-- =============================================
-- 3. ELIMINAR
-- =============================================
CREATE OR ALTER PROCEDURE Person.DeleteAddressType
    @AddressTypeID INT
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM Person.AddressType
    WHERE AddressTypeID = @AddressTypeID;
END;
GO


-- =============================================
-- 4. CONSULTA SIMPLE
-- =============================================
CREATE OR ALTER PROCEDURE Person.GetAddressTypes
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        AddressTypeID,
        Name
    FROM Person.AddressType;
END;
GO


-- =============================================
-- 5. CONSULTA CON JOIN
-- =============================================
CREATE OR ALTER PROCEDURE Person.GetAddressesWithState
AS
BEGIN
    SET NOCOUNT ON;

    SELECT TOP 50
        a.AddressID,
        a.City,
        sp.Name AS StateProvinceName
    FROM Person.Address a
    INNER JOIN Person.StateProvince sp ON a.StateProvinceID = sp.StateProvinceID;
END;
GO